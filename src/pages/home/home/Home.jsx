import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className="">This is home</h1>

            {/* <ScrollRestoration> */}
            <Banner></Banner>
            <About></About>
            <Services></Services>
            {/* </ScrollRestoration> */}
        </div>
    );
};

export default Home;