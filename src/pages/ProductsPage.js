import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { MdKeyboardArrowRight } from "react-icons/md";


const ProductsPage = (props) => {

    return (
        <>
            <Product id={props.match.params.id} details={props.location.state.product} />
            <Link style={{ display: 'flex', alignItems: 'center', color: '#3c3c3c', textDecoration: 'none', marginTop: '30px' }} to="/products">
                <MdKeyboardArrowRight style={{ fontSize: '20px', transform: 'rotate(180deg)' }} /> Back to all products
            </Link>
        </>
    );
}

export default ProductsPage;