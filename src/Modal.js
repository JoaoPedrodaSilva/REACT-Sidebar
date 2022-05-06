import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext()

  return (
    <div className={`${isModalOpen ? 'modal' : 'modal hidden' }`}>
        <button onClick={() => closeModal()}>
            <FaTimes />
        </button>
        <h3>MODAL CONTENT</h3>
    </div>
  )
}

export default Modal