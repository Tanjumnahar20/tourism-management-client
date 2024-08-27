import { useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement your search logic here
  };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 z-50">
     
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="px-4 py-2 rounded-l bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-r focus:outline-none"
        >
          Search
        </button>
      </form>
      <ul className="flex space-x-4 mr-5">
        <li><NavLink to='/' className="hover:text-gray-400">Home</NavLink></li>
        <li><NavLink to='/destinations' className="hover:text-gray-400">Destinations</NavLink></li>
        <li><NavLink to='/services' className="hover:text-gray-400">Services</NavLink></li>
        <li><NavLink to='/feedback' className="hover:text-gray-400">Feedback</NavLink></li>
        <li><NavLink to='/signup' className="hover:text-gray-400">Sign up</NavLink></li>
      </ul>
    </nav>
    );
};

export default NavBar;