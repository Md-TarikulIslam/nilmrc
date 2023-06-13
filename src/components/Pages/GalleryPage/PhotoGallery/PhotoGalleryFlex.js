import React from 'react';
import img from '../../../assets/images/footer/footer_top_bg.png'
import PhotoGallery from './PhotoGallery';
import SideNav from '../../../Shared/SideNav/SideNav';

const PhotoGalleryFlex = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row mt-16 justify-between px-0 md:px-5 lg:px-10'>
                <PhotoGallery />
                <SideNav />
            </div>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default PhotoGalleryFlex;