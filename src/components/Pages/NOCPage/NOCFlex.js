import React from 'react';
import img from '../../../components/assets/images/footer/footer_top_bg.png'
import NOCPage from './NOCPage';
import SideNav from '../../Shared/SideNav/SideNav';

const NOCFlex = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16 justify-center'>
                <NOCPage />
                <SideNav />
            </div>
            {/* <Gallery /> */}
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default NOCFlex;