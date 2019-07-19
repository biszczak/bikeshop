import React from 'react';
import '../styles/Product.css';

const Product = (props) => {
    const { marke, model, img, desc, price } = props.details;

    return (
        <article className="product">
            <div className="photo">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <span>{marke}</span>
                <h2>{model}</h2>
                <p>{desc}</p>
                <span className="big-price">{price}$</span>
            </div>
        </article>
    );
}

export default Product;