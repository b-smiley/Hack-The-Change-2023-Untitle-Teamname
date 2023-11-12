import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar_links'>
                <li className='navbar_link'><Link to="/">Home</Link></li>
                <li className='navbar_link'><Link to="/about">About</Link></li>  
                <li className='navbar_link'><Link to="/buy">Buy</Link></li>  
                <li className='navbar_link'><Link to="/sell">Sell</Link></li>  
                <li className='navbar_link'><Link to="/recipes">Recipes</Link></li>  
                <li className='navbar_link'><Link to="/login">Login</Link></li>  
            </ul>
        </nav>
    );
}

export default NavBar;
