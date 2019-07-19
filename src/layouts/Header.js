import React from 'react';
import '../styles/Header.css'
// import mainImage from '../images/main-image.jpg';


const Header = () => {
    // const images = [img1, img2, img3]
    // const index = Math.floor(Math.random() * 3);
    // const img = images[index];
    return (
        <header>
            <div className="description">
                <div>
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae a cumque assumenda, debitis porro.</h1>
                </div>
            </div>
            {/* <div className="main-image">
                <img src={mainImage} alt="burger od kodera" />
            </div> */}
        </header>
    );
}

export default Header;