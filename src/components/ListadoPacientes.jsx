import Paciente from "./Paciente"


export default function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  
  return (
    <>
    {pacientes && pacientes.length ? (
      <>
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-2xl text-center mb-5">Listado de Pacientes</h2>
      <p className="text-center text-xl mb-10">Administra tus {" "}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
      
      { pacientes.map( (paciente) =>(
      <Paciente 
        key={paciente.id}
        paciente={paciente}
        setPaciente ={setPaciente}
        eliminarPaciente = {eliminarPaciente}
      />))}
    </div>
    </>

    ) : (
      <div>
      <h2 className="font-black text-2xl text-center mb-5">No existen pacientes registrados</h2>
      <p className="text-center text-xl mb-10">Comienza agregando pacientes {" "}<span className="text-indigo-600 font-bold">y aparecerán en este lugar</span></p>
      </div>
    )}    
    </>
    
  )
}
  
