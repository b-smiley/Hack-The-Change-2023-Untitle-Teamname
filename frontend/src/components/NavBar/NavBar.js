// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                {/* Insert your logo here */}
                <Link to="/"><img className='navbar_logo' src="../../../Icon.png" alt="Logo" /></Link>
            </div>
            <ul className='navbar_links'>
                <li className='navbar_link'><Link to="/">Home</Link></li>
                <li className='navbar_link'><Link to="/about">About</Link></li>  
                <li className='navbar_link'><Link to="/buy">Buy</Link></li>  
                <li className='navbar_link'><Link to="/sell">Sell</Link></li>  
                <li className='navbar_link'><Link to="/recipes">Recipes</Link></li>  
                <li className='navbar_link'><Link to="/login">Login</Link></li>  
            </ul>
        </div>
    );
}

export default NavBar;