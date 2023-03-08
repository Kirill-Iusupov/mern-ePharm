import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'



const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar blue">
                <Link to="/" className="brand-logo">ePharm</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/login">Войти</Link></li>
                </ul>
            </div>
        </nav>  
    );
}

export default Navbar;
