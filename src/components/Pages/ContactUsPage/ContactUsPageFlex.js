import React from 'react';
import img from '../../../components/assets/images/footer/footer_top_bg.png'
import ContactUsPage from './ContactUsPage';
import SideNav from '../../Shared/SideNav/SideNav';

const ContactUsPageFlex = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16 justify-center'>
              <ContactUsPage />
              <SideNav />
            </div>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default ContactUsPageFlex;