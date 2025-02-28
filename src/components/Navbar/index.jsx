'use client'
import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
   const router = useRouter()
const pathname = usePathname()
    const btn = [
        {
            id: '/',
            title: 'Home',
        },
        {
            id: '/',
            title: 'Our Mission',
        },
        {
            id: '/blog',
            title: 'Blog',
        },
        {
            id: '/',
            title: 'Contact',
        },

    ];
    const handleScroll = (id) => {
        router.push(id)
        // const element = document.getElementById(id);
        // if (element) {
        //     // Scroll to the section if it exists
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }
    }

    return (
        
        <div className={` transition-colors duration-300 `}>

            <div className={` container mx-auto h-[118px] flex justify-between items-center px-5  `}>
                <img onClick={() => handleScroll('home')} src="/assets/logo.png" alt="logo" className='cursor-pointer h-[58px] w-[139px]]' />

                <div className='hidden lg:flex items-center gap-8 text-lg font-semibold  text-[#394149]'>
                    {btn?.map((btn, i) => (
                        <button onClick={() => handleScroll(btn.id)} className={`${(pathname=== '/blog' && btn.title === "Blog") && 'underline underline-offset-4'}`} key={i}>{btn.title}</button>
                    ))}
                </div>
                    <button className='h-10 rounded-lg font-semibold text-white bg-blue px-6 hidden lg:block'>Contact</button>

                <span className='block lg:hidden'>
                    <Sidebar/>
                    </span>
            </div>
        </div>
    );
};

export default Navbar;