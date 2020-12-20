import React from 'react'
import { NavLink} from 'react-router-dom'





const Nav = () => {
    return(
        <div className="nav">
            <ul className="nav__links">
                <NavLink to="/" className="nav__item"  >Home</NavLink>
                <NavLink to="/contact" className="nav__item" >Contact</NavLink>
                <NavLink to="/randomcolor" className="nav__item">Random Color</NavLink>
                <NavLink to="/randommeme" className="nav__item">Random Meme</NavLink>
                <NavLink to="/slideshow" className="nav__item">Slide Show</NavLink>
                <NavLink to="/timer" className="nav__item">Timer</NavLink>
                <NavLink to="/todos" className="nav__item">Todos</NavLink>
            </ul>

            <div className="icon-one">
                <div className="navMenu navMenu-one"></div>
            </div>
        </div>
    )
}

export default Nav