import React from 'react';
import Hero from './Hero/Hero';
import SideNav from '../../Shared/SideNav/SideNav';
import img from '../../../components/assets/images/footer/footer_top_bg.png'

const MainGrid = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16 justify-center'>
                <Hero />
                <SideNav />
            </div>
            {/* <Gallery /> */}
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default MainGrid;