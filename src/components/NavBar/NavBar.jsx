/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from '../../assets/logo.jpg';
import useAuth from "../../CustomHooks/useAuth";



const NavBar = () => {

  const {user,logOut} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {navigate('/'); })
  }

  return (
    <nav className=" bg-gray-800 text-yellow-400 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center">
        <img src={logo} alt="" width={50} height={50} className="mr-2 rounded-full"/>
        <h1>Travellers BD</h1>
      </div>

      <ul className="flex space-x-4 mr-5">
        <>
        <li><NavLink to='/' className="hover:text-gray-400">Home</NavLink></li>
        <li><NavLink to='/destinations' className="hover:text-gray-400">Destinations</NavLink></li>
        <li><NavLink to='/services' className="hover:text-gray-400">Services</NavLink></li>
      
          <li><NavLink to='/bookings' className="hover:text-gray-400">Bookings</NavLink></li>
          
        
        { user ?
          <li><NavLink to='/logout' className="hover:text-gray-400" onClick={handleLogOut}>Log Out</NavLink></li>
          :
          <li><NavLink to='/login' className="hover:text-gray-400">Login</NavLink></li>
        }
        </>
      </ul>

      <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;