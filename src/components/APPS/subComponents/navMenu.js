import React from 'react'
import { NavLink} from 'react-router-dom'




const NavMenu = () => {
    const handleMenu = () => {
        let menu = document.querySelector('.navMenu')
        menu.classList.toggle('activeMenu')
        let icon = document.querySelector('.iconContainer')
        icon.classList.toggle('activeIcon')
    }
    return(
        <div className="navMenu__container">
            <div className="iconContainer" >
                <div className="navMenu__icon" onClick={() => handleMenu()}></div>
            </div>
            <div className="navMenu">
                <ul className="navMenu__items">
                    <NavLink to="/" className="navMenu__item"  >Home</NavLink>
                    <NavLink to="/contact" className="navMenu__item" >Contact</NavLink>
                    <NavLink to="/randomcolor" className="navMenu__item">Random Color</NavLink>
                    <NavLink to="/randommeme" className="navMenu__item">Random Meme</NavLink>
                    <NavLink to="/slideshow" className="navMenu__item">Slide Show</NavLink>
                    <NavLink to="/timer" className="navMenu__item">Timer</NavLink>
                    <NavLink to="/todos" className="navMenu__item">Todos</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu