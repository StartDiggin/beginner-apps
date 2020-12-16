import React from 'react'
import { NavLink} from 'react-router-dom'



const Nav = () => {
    return(
        <div className="nav">
            <ul className="nav__links">
                <NavLink key="home" to="/" className="nav__item">Home</NavLink>
                <NavLink key="contact" to="/contact" className="nav__item">Contact</NavLink>
                <NavLink key="randomcolor" to="/randomcolor" className="nav__item">Random Color</NavLink>
                <NavLink key="randommeme" to="/randommeme" className="nav__item">Random Meme</NavLink>
                <NavLink key="slideshow" to="/slideshow" className="nav__item">Slide Show</NavLink>
                <NavLink key="timer" to="/timer" className="nav__item">Timer</NavLink>
                <NavLink key="todos" to="/todos" className="nav__item">Todos</NavLink>
            </ul>
        </div>
    )
}

export default Nav