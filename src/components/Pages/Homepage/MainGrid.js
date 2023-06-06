import React from 'react';
import Hero from './Hero/Hero';
import SideNav from '../../Shared/SideNav/SideNav';

const MainGrid = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16'>
                <Hero />
                <SideNav />
            </div>
        </div>
    );
};

export default MainGrid;