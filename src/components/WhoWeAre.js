import React from 'react';
import bicycle from '../images/bibycle.jpg';
import '../styles/WhoWeAre.css';
import { Link } from 'react-router-dom';

const WhoWeAre = ({ title, author, text }) => {

    const heading = 'Lorem ipsum dolor sit amet consectetur!';
    const secionDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam adipisci commodi, omnis nobis ipsa dolore similique. Harum sit facere aspernatur doloremque velit autem aliquam in officiis vero? Molestias, temporee.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam adipisci commodi, omnis nobis ipsa dolore similique. Harum sit facere aspernatur doloremque velit autem aliquam in officiis vero? Molestias, temporee.`;

    return (
        <section className='who-we-are'>
            <div className="desc" style={{ width: '50%' }}>
                <h2>{heading}</h2>
                <p>{secionDesc}</p>
                <br />
                <p>{secionDesc}</p>
                <div className='primary-btn-container'>
                    <Link to="/products" className='primary-btn'>Products</Link>
                </div>

            </div>
            <div className="image" style={{ width: '40%' }}>
                <img src={bicycle} alt="" />
            </div>
        </section>
    );
}

export default WhoWeAre;