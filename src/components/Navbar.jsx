import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Navbar() {
   const [Nav, setNav] = useState(false);
   const handleClick = () => {
     setNav(!Nav);
   };

  return (
    <div className="absolute left-0 right-0 top-0 h-20 drop-shadow-lg border-b-2 bg-black">
      <nav className="flex items-center w-full h-full justify-evenly">
        <div className="flex flex-row cursor-pointer">
        <h1 className="text-2xl text-green hover:text-hover">E</h1>
        <h1 className="text-2xl">Logical</h1>
        </div>
          <ul className="hidden md:flex space-x-10">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/aboutus" className="nav-item">About</Link></li>
            <li><Link to="/contact" className="nav-item">Contact</Link></li>
          </ul>
          <div className="hidden gap-4 md:flex">
        <button className="button w-32 text-2xl hover:bg-white hover:text-hover">
          <Link to='/signin'>Sign In</Link>
        </button>
        <button className="button w-32 bg-white text-2xl text-hover hover:bg-hover hover:text-white">
          <Link to='/signup'>Sign Up</Link>
        </button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!Nav ? <AiOutlineMenu className="w-5 text-white hover:text-black" /> : <AiOutlineClose className="w-5 text-white hover:text-black" />}
        </div>
      </nav>


      <ul className={!Nav ? 'hidden' : "absolute bg-card w-full px-8"}>
            <li className="text-white mt-4 text-xl font-primary hover:text-hover w-full border-b-2 border-hover"><Link to="/">Home</Link></li>
            <li className="text-white text-xl font-primary hover:text-hover w-full border-b-2 border-hover"><Link to="/aboutus">About</Link></li>
            <li className="text-white text-xl font-primary hover:text-hover w-full border-b-2 border-hover"><Link to="/contact">Contact</Link></li>
      <div className="flex flex-col my-4">
        <button className="button font-body px-5 mb-4 hover:bg-white hover:text-hover">
          <Link to='/signin'>Sign In</Link>
        </button>
        <button className="button px-4 bg-white text-hover hover:bg-hover hover:text-white">
          <Link to='/signup'>Sign Up</Link>
        </button>
      </div>
      </ul>
    </div>
  );
}

export default Navbar;



/*

<div onClick={handleClick} className='flex justify-end  text-hover sm:hidden'>
          {Nav ? <AiOutlineClose className="z-10" size={40}/> : <AiOutlineMenu size={40} />}
      </div>
      <ul className={Nav ? 'fixed flex flex-col justify-evenly px-8 top-0 w-screen z-0 h-[200px] left-0 divide-y-2 divide-black bg-primary ease-in duration-500' : 'fixed left-[100%]'}>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/contact" className="nav-item">Contact</Link></li>
            <li><Link to="/services" className="nav-item">Services</Link></li>
      </ul> */