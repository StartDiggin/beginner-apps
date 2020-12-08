import React from 'react'
import { NavLink} from 'react-router-dom'
import LinkData from './APPS/LinkData'

const Nav = () => {
    const Apps = LinkData.map(link => <NavLink key={link} to={"/" + link} className="nav__item">{link}</NavLink>)
    return(
        <div className="nav">
            <ul className="nav__links">
                <NavLink key="home" to="/" className="nav__item">Home</NavLink>
                {Apps}
            </ul>
        </div>
    )
}

export default Nav