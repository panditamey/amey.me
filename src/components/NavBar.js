import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between h-24 mx-auto px-5 text-white items-center'>
      <h1 className='w-full text-3xl font-bold ' >Amey Pandit</h1>

      <ul className='md:flex text-1xl hidden font-bold ' >
        <li className='p-4 '>Home</li>
        <li className='p-4'>Skills</li>
        <li className='p-4'>Experience</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Contact</li>
        <li className='p-2'>
          <a href="https://github.com/panditamey" target="_blank" rel="noreferrer">
            <button className='text-1xl text-white w-[135px] rounded-md  mx-auto py-3 bg-[#4a15e8] border-[#4a15e8] hover:ring-2 focus:outline-none hover:ring-gray-100 font-medium px-5 text-center inline-flex items-center  mr-2 mb-2'>
              <img src="\icons\github.png" style={{ width: "33px", height: "22px", paddingRight: "12px" }} />
              Github</button>
          </a>
        </li>
      </ul>


      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#3500D3] ease-in-out duration-500' : 'ease-in-out h-[300%] duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4' >Amey Pandit</h1>

        <ul className='p-4 uppercase font-bold'>
          <li className='p-4 border-b  border-white'>Home</li>
          <li className='p-4 border-b border-white'>Company</li>
          <li className='p-4 border-b border-white'>Resources</li>
          <li className='p-4 border-b border-white'>About</li>
          <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar