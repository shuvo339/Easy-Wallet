import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" bg-teal-50">
      <div className='navbar max-w-6xl mx-auto'>
  <div className="flex-1 ">
    <Link to='/'><p className="font-bold text-3xl">EasyWallet</p></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <Link to='/login'><li className='btn mr-3 bg-teal-400'>Login</li></Link>
      <li className='btn bg-teal-400'><a>Dashboard</a></li>
      
    </ul>
  </div>
  </div>
</div>
  );
};

export default Navbar;