import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import bicycle1 from '../images/bicycle1.png';
import bicycle2 from '../images/bicycle2.png';
import bicycle3 from '../images/bicycle3.png';
import bicycle4 from '../images/bicycle4.png';

class Page extends Component {
    state = {
        products: [
            {
                id: 1,
                marke: 'GRAND',
                model: 'outlander',
                price: 1999,
                visits: 0,
                avalible: 3,
                img: bicycle1,
                desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel.'
            },
            {
                id: 2,
                marke: 'CROSS',
                model: '12s40c',
                price: 899,
                visits: 0,
                avalible: 2,
                img: bicycle2,
                desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel.'
            },
            {
                id: 3,
                marke: 'MOUNTAIN',
                model: 'bike-4020c',
                price: 1450,
                visits: 0,
                avalible: 1,
                img: bicycle3,
                desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel.'
            },
            {
                id: 4,
                marke: 'HIGHWAY',
                model: 'speed 100',
                price: 870,
                visits: 0,
                avalible: 3,
                img: bicycle4,
                desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id cupiditate iure nemo ipsum nulla, iste eos voluptatibus ea accusantium laudantium iusto consequatur deleniti! Error atque sed soluta quo vel.'
            },
        ]
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={() => <HomePage products={this.state.products} />} />
                    <Route path="/products" component={() => <ProductListPage products={this.state.products} />} />
                    <Route path="/product/:nazwa" component={ProductsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </>
        );
    }
}

export default Page;