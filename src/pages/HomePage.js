import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import background from '../images/background1.jpg'
import PopularProducts from './PopularProducts'
import Newsletter from '../layouts/Newsletter';



const HomePage = (props) => {

    return (
        <>
            <div className="app-background">
                <img src={background} alt="" />
            </div>
            <WhoWeAre />
            <PopularProducts products={props.products} />
            <section className="newsletter">
                <Newsletter />
            </section>

        </>
    );
}

export default HomePage;