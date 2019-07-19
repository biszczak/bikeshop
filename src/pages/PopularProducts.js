import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PopularProducts.css';

const PopularProducts = (props) => {

    let popularProducts = [...props.products];

    popularProducts.sort((a, b) => {
        //SORTOWANIE ODWROTNE
        // a = a.visits
        // b = b.visits
        // if (a < b) return -1
        // if (a > b) return 1
        // return 0
        a = a.visits
        b = b.visits
        if (a > b) return -1
        if (a < b) return 1
        return 0
    })

    const displayProducts = [...popularProducts].slice(0, 3);

    console.log(displayProducts);

    return (
        <section className="popular-products">
            <h2>Popular bikes</h2>
            <div className="popular-products-wrapper">
                {displayProducts.map(product => (
                    <Link key={product.id} className="link" to={{ pathname: `/product/${product.model}`, state: { product } }}>
                        <div className="product-container">
                            <h3>{product.marke}</h3>
                            <span>{product.model}</span>
                            <img src={product.img} alt="bicycle" />
                            <span className="price">{product.price}$</span>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
}

export default PopularProducts;