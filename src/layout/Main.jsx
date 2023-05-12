import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/NavBar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;