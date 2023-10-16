import {useState, useEffect} from 'react';
import Error from './Error';
import Paciente from './Paciente';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const[nombre, setNombre] = useState('');
  const[propietario, setPropietario] = useState('');
  const[email, setEmail] = useState('');
  const[fecha, setFecha] = useState('');
  const[sintomas, setSintomas] = useState('');
  const[error, setError] = useState(false)
0
  //useEffect(()=>{},[Aqui son las dependencias, aquik se va a estar viendo lo que cambie para realizar un render ])

  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  

  const handleSubmit = (e)=>{
    e.preventDefault();
    //Validacion del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes("")){
      setError(true)
      return;
    } 
    setError(false)

    const generarId=() =>{
      const fecha = Date.now().toString(36)
      const random = Math.random().toString(36).substring(2)
      return random + fecha;
    }

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    }

    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({}) //LE LIMPIO
    }else{
      //Nuevo registro
      objetoPaciente.id= generarId()
      setPacientes([...pacientes, objetoPaciente]); // tomo una copia de pacientes y le agrego el objetoPaciente 
    // setPacientes(objetoPaciente)// Si dejo así se reescribe el objeto el State y no quiero eso, quiero una coleccion de pacientes, quiero agregar un paciente no reescribirlo
    //Reiniciar el form
    }

    //Reiniciar el form
    setNombre("")
    setFecha("")
    setEmail("")
    setFecha("")
    setSintomas("")
    setPropietario("")

  }

  return (
    <div className="md:w-1/2 lg:2/5 mx-5">
        <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      {/* rfce */}
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {" "} 
          <span className="text-indigo-600 font-bold">Administralos</span>  
        </p>

        <form action="" className="bg-white  shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit} >
          
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input type="text" name="" id="mascota" placeholder="Nombre de la mascota"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
               value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input type="text" name="" id="propietario" placeholder="Nombre propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
            <input type="email" name="" id="email" placeholder="e-mail" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input type="date" name="" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha} onChange={(e)=> setFecha(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintoma</label>
            <textarea name="" id="sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas} onChange={(e)=> setSintomas(e.target.value)} ></textarea>
          </div>
          {error&& <Error><p>Todos los campos son requeridos!</p></Error>}
          {/* Si error es true, imprime eso */}
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all rounded-md" 
          value={paciente.id?"Editar Paciente":"Agregar Paciente"}/>
          
        </form>
    </div>
  )
}

export default Formulario


