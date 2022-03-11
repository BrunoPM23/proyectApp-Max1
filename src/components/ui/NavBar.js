import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
       navigate('/login', {
           replace: true,
       })
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        Proyectos
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Contactos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}