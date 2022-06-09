import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Farmers Market</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>    
            </div>
        </nav>
     );
}
 
export default Navbar;
