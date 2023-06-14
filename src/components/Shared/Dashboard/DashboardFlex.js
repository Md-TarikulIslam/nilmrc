import React from 'react';
import img from '../../../components/assets/images/footer/footer_top_bg.png'
import SideNav from '../../Shared/SideNav/SideNav';
import Dashboard from './Dashboard';

const DashboardFlex = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16 justify-between px-0 md:px-5 lg:px-10'>
                <Dashboard />
                <SideNav />
            </div>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default DashboardFlex;