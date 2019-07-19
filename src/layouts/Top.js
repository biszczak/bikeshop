import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import '../styles/Top.css';
import HamburgerMenu from '../components/HamburgerMenu';

const Top = () => {
    return (
        <div className="top">
            <div className="top-wrapper">
                <Logo />
                {window.innerWidth < 992 ? <HamburgerMenu /> : <Navigation />}
            </div>
        </div>
    );
}

export default Top;