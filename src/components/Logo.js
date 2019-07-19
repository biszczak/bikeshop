import React from 'react';
import { NavLink } from 'react-router-dom';

// import logo from '../images/logo.png';


const Logo = () => {
    return (
        <NavLink to="/" exact style={{ color: '#fff', textDecoration: 'none' }}>
            <div className="logo">
                {/* <img src={logo} alt="main logo" /> */}
                <h3>Bikeshop</h3>
            </div>
        </NavLink>
    );
}

export default Logo;