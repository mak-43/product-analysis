import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
       <nav className='flex gap-6 justify-center py-6 font-bold text-lg '>
           <CustomLink to='/home'>HOME</CustomLink>
           <CustomLink to='/reviews'>REVIEWS</CustomLink>
           <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
           <CustomLink to='/blogs'>BLOGS</CustomLink>
           <CustomLink to='/about'>ABOUT</CustomLink>
       </nav>
    );
};

export default Header;