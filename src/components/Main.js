import React from 'react';
import Header from './Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Location from './Shared/Location/Location';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Location></Location>
            <Footer></Footer>
        </div>
    );
};

export default Main;