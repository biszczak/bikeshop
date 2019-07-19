import React from 'react';



const Products = (props) => {
    console.log(props)
    return (
        <div className="product">
            <h3>{props.name.marke}</h3>
            <span>$ 1299</span>
            <img src="" alt="" />
        </div>
    );
}

export default Products;