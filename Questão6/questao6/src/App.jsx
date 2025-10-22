import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState([])
  const [endereco, setEndereco] = useState({})
  const [habilidades, setHabilidades] = useState([])
  const [projs, setProjs] = useState([])

  const getUSer = async () => {
    const response = await axios.get('https://avaliacao-bosch.onrender.com/usuario');
    setUser(response.data)
    setEndereco(response.data.endereco)
    setHabilidades(response.data.habilidades)
    setProjs(response.data.projetos)
    console.log(response.data)
    
  }
  useEffect(() =>{
    getUSer();
  },[])

  return (
    <div className='w-screen bg-emerald-100 h-screen'>
      <div className='w-screen h-1/10 bg-emerald-700 font-serif text-4xl text-white flex items-center justify-center'>{user.nome}</div>
      <div className='w-screen min-h-9/10 flex items-center justify-start gap-10 flex-col font-serif text-2xl'>

        <div className=' flex items-center justify-center gap-20 font-serif text-2xl flex-row p-10'>
          <p className='flex flex-row'><div className='text-green-700'>Endereço</div>: {endereco.rua}, {endereco.numero}, {endereco.cidade} - {endereco.estado} </p>
          <p className='flex flex-row'><div className='text-green-700'> Email</div>: {user.email}</p>
          <p className='flex flex-row'><div className='text-green-700'> Idade</div>: {user.idade}</p>
        </div>

          <h1>HABILIDADES</h1>
          
        <div className='w-screen flex flex-row items-center justify-center gap-20'>
          {habilidades.map((hab) => (
            <div className=' flex p-5 items-center justify-center flex-col w-50  bg-emerald-700 text-white rounded-lg'> 
              <p className='text-xl'>{hab}</p>
            </div>
          ))
          }
        </div>
        <h1>Projetos</h1>
        <div className='w-screen flex flex-row items-center justify-center gap-20'>
          {projs.map((proj) => (
            <div className='  flex p-5 items-center justify-center flex-col w-50  bg-emerald-700 text-white rounded-lg'>
              <p className='text-xl'>{proj.nome}</p>
              {
                proj.status === "concluído" ? <p className='text-green-300'>{proj.status}</p> : proj.status ==="em andamento" ? <p className='text-yellow-300'>{proj.status}</p> : <p className='text-red-300'>{proj.status}</p>
              }
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
