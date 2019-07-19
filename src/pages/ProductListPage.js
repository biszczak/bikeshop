import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css';
import Newsletter from '../layouts/Newsletter';

const ProductlistPage = (props) => {
    const list = props.products.map(product => (
        <li key={product.id} >
            <Link className="link" onClick={() => { product.visits++ }} to={{ pathname: `/product/${product.model}`, state: { product } }}>
                <img src={product.img} alt="" />
                <div className="desc">
                    <h3>{product.marke}</h3>
                    <span>{product.model}</span>
                    <p>{product.desc}</p>
                </div>
                {/* <div className='primary-btn-container'>
                    <Link className='primary-btn'>Button</Link>
                </div> */}
            </Link>
        </li>
    ))
    return (
        <>
            <div className="products">
                <h2>Lista produktów</h2>
                <div>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
            <section className="newsletter">
                <Newsletter />
            </section>
        </>
    );
}

export default ProductlistPage;