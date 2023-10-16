import {useState,  useEffect } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  //Afuera del return va codigo JS y adentro del return va lo que se ve en pantalla (html)
  // const edad = 18;

  const[pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []); 
  const[paciente, setPaciente] = useState({}); 


  useEffect(()=>{ localStorage.setItem("pacientes", JSON.stringify(pacientes))},[pacientes]);

  const eliminarPaciente  = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }



  
  return (
    <div className='container mx-auto mt-20'> {/*Esto se conoce como un fragment, va en vez de poner div para que sea el elemento máximo*/}
      {/* En el nivel más alto solo debe tener un elemento (El div, si no tengo eso, 
        no retorna ni el h1 ni la img, necesita estar rodeada por  el div para que lo retorne)
        No puedo crear otro div  */} 
      {/* <h1>{"Hola Mundo".toUpperCase()}</h1> */}
      {/* {edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"} */}
      {/* Aquí voy a empezar a hacer  lo del proyecto */}
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes = {pacientes}  
        setPacientes={setPacientes}
        paciente = {paciente}
        setPaciente ={setPaciente}
        />

        <ListadoPacientes
        pacientes = {pacientes} 
        setPaciente = {setPaciente}
        eliminarPaciente ={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App