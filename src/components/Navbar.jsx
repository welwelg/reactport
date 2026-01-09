import React, { useState } from 'react';

import {FiMenu,FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen]=useState(false);
  const NavbarLinks =[
    {id:1,name:'Home',link:'#home'},
    {id:2,name:'About',link:'#about'},
    {id:3,name:'Skills',link:'#skills'},
    {id:4,name:'My projects',link:'#projects'},
    {id:5,name:'Contact',link:'#contact'},
    
  ];
  return (
    <header className='fixed top-0 left-0 z-20 w-full text-white ' data-aos='fade-up' data-aos-delay='300'>
      <div className='container flex items-center justify-between p-5 mx-auto'>
        {/*LOGO*/}
        <a href="#home" className='text-4xl italic font-bold text-white'>WelTech<span className='text-orange-600'>Code</span></a>

        {/*Mobile Menu Toggle*/}
        <button className='md:hidden focus:outline-none' onClick={()=>setIsOpen(!isOpen)}>
          <FiMenu className='w-8 h-8 text-white'/>
        </button>

        {/*Desktop Navigation*/}
        <nav className='items-center hidden md:flex space-x-7'>
          {NavbarLinks.map((link)=>(
            <a key={link.id} href={link.link} className='text-lg hover:text-orange-500'>{link.name}</a>
          ))}
          
        </nav>
      </div>

        {/* Mobile Navigation */}
        <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#ea580c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
        >
        {/* Close Button */}
        <button className='absolute text-white top-5 right-5' onClick={()=>setIsOpen(false)}>
            <FiX className='w-8 h-8'/>
        </button>
        {/* Mobile Navigation */}
        {NavbarLinks.map((link)=>(
            <a key={link.id} href={link.link} className='text-lg text-white hover:text-gray-300'
            onClick={()=>setIsOpen(false)}
            >{link.name}</a>
        ))}
        
        </div>
    </header>
  );
}
