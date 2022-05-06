import React from "react"
import Home from './Home.js'
import Modal from './Modal.js'
import Sidebar from './Sidebar.js'

function App() {
    return (
        <main className="app">
            <Home />
            <Modal />
            <Sidebar />
        </main>
    )
}

export default App