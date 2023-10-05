import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

export default function MobulHamburger({nav, handleNav}) {
  return (
    <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
            <h1>BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaYoutube className='icon' />
                <FaPinterest className='icon' />
                <FaInstagram className='icon' />
            </div>
        </ul>
    </div>
  )
}
