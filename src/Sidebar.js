import React from 'react'
import logo from './logo.png'
import {FaTimes} from 'react-icons/fa'
import {social, links} from './data.js'
import { useGlobalContext } from './context'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return (
    <aside className={`${isSidebarOpen ? 'sidebar' : 'sidebar hidden'}`}>        
        <div className='sidebar-header'>
            <img className='logo' src={logo} alt="" />
            <button onClick={() => closeSidebar()}>
                <FaTimes />
            </button>
        </div>

        <ul className='links'>
            {links.map(link => {
                const {id, url, text, icon} = link
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                )
            })}
        </ul>

        <ul className='socials'>
            {social.map(link => {
                const {id, url, icon} = link
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar