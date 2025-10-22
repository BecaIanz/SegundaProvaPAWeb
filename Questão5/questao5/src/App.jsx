import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [divas, setDivas] = useState([])

  const getDiva = async () => {
    const response = await axios.get('https://avaliacao-bosch.onrender.com/all');
    setDivas(response.data)
    
  }
  useEffect(() =>{
    getDiva();
  },[])
  return (
    <div className=' flex items-center gap-5 justify-center  flex-col w-screen bg-purple-200'>
      <div className='flex items-center font-serif justify-center bg-amber-200 w-full h-24 text-5xl text-purple-950'>Divas Da Bosch</div>
      <div className='flex flex-row gap-10 p-10 flex-wrap items-center justify-center'>
        {divas.map((diva) => (
          <div className=" border-4 font-serif border-amber-200  flex flex-col items-center rounded-xl w-60 h-75 bg-purple-500">
              <img className="rounded-lg w-58 h-40" src={diva.imagem} alt="nao foi né" />
              <p className='flex flex-row'><div className='text-purple-50'>ID: </div> {diva.id}</p>
              <p className='flex flex-row'><div className='text-purple-50'>Nome: </div>{diva.nome} {diva.sobrenome}</p>
              {
                diva.apelido === "" ? "" : <p className='flex flex-row'><div className='text-purple-50'>Apelido: </div> {diva.apelido}</p>
              }
              {
                diva.status === "Matriculado" ? <div className='text-lime-500'> Status: {diva.status}</div> : <div className='text-red-300'>Status: {diva.status}</div>
              }
          </div>
          )) 
        }
      </div>
    </div>      
  )
}

export default App
