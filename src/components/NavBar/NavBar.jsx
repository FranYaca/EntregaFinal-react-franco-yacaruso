import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'


const NavBar = () => {
  return (
    <header>
        <h1>Tienda Tec</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Nuestros Productos</li>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar
