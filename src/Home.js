import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext()

  return (
    <main className='home'>
        <button
          className='sidebar-toggle'
          onClick={openSidebar}
        >
            <FaBars />
        </button>
        <button
          className='modal-toggle'
          onClick={openModal}
        >
            Show Modal
        </button>
    </main>
  )
}

export default Home