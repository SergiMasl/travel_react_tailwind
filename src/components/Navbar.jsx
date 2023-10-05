import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import MobulHamburger from './MobulHamburger';

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>

        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='' size={20} />
            <BsPerson size={20} />
        </div>
        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
   
        <MobulHamburger nav={nav} handleNav={handleNav}/>
    </div>
  )
}
