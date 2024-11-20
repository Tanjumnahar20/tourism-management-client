// // // /* eslint-disable no-unused-vars */
// import { useEffect, useRef, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import logo from '../../assets/logo.jpg';
// import useAuth from "../../CustomHooks/useAuth";
// import useCartItem from "../../CustomHooks/useCartItem";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();
//   const [cart] = useCartItem();
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef();

//   const handleLogOut = () => {
//     logOut().then(() => {
//       navigate('/');
//     });
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
//   const menuItems = (
//     <>
//       <li><NavLink to="/" className="hover:text-gray-400">Home</NavLink></li>
//       <li><NavLink to="/destinations" className="hover:text-gray-400">Destinations</NavLink></li>
//       <li><NavLink to="/services" className="hover:text-gray-400">Services</NavLink></li>
//       <li>
//         <NavLink to="/bookings" className="hover:text-gray-400 flex items-center">
//           <AiOutlineShoppingCart className="text-3xl" />
//           <span className="ml-1">{cart.length}</span>
//         </NavLink>
//       </li>
//       {user ? (
//         <li>
//           <NavLink to="/logout" className="hover:text-gray-400" onClick={handleLogOut}>
//             Log Out
//           </NavLink>
//         </li>
//       ) : (
//         <li><NavLink to="/login" className="hover:text-gray-400">Login</NavLink></li>
//       )}
//     </>
//   );

//   return (
//     <nav className="bg-black backdrop-blur-md bg-opacity-60 md:text-xl text-yellow-500 font-medium sticky top-0 z-50">
//       <div className="lg:flex items-center justify-between lg:p-4 lg:max-w-[1200px] mx-auto">

//         {/* Logo and title */}
//         <div className="hidden md:flex items-center  ">
//           <img src={logo} alt="Logo" width={50} height={50} className="mr-2 rounded-full" />
//           <h1>Travellers BD</h1>
//         </div>


//         {/* Nav links */}
//         <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:block mt-4 md:mt-0`}>

//           {menuItems}
//         </ul>
//       </div>
//       {/* Mobile Menu Icon */}
//       <div>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-yellow-500 focus:outline-none"
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>


//       {/* Mobile Menu */}
//       <div ref={menuRef} className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="bg-white text-gray-800 sm:w-3/4 max-w-sm h-[100%] p-4 relative">
//           <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-800">
//             <FaTimes size={24} />  <FaBars size={24} />
//           </button>
//           <ul className="space-y-4 mt-8">
//             {menuItems}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import useAuth from "../../CustomHooks/useAuth";
import useCartItem from "../../CustomHooks/useCartItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCartItem();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleLogOut = () => {
    logOut().then(() => {
      navigate('/');
    });
  };

  const handleMenuToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = (
    <>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/destinations" className="hover:text-gray-400">Destinations</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/services" className="hover:text-gray-400">Services</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/bookings" className="hover:text-gray-400 flex items-center">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className="ml-1">{cart.length}</span>
        </NavLink>
      </li>
      {user ? (
        <li onClick={() => setIsOpen(false)}>
          <button onClick={handleLogOut} className="hover:text-gray-400">
            Log Out
          </button>
        </li>
      ) : (
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/login" className="hover:text-gray-400">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-black backdrop-blur-md bg-opacity-60 md:text-xl text-yellow-500 font-medium sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 lg:max-w-[1200px] mx-auto">
        
        {/* Logo and title */}
        <Link to='/' className="flex items-center">
          <img src={logo} alt="Logo" width={40} height={40} className="mr-2 rounded-full" />
          <h1 className="text-lg md:text-xl">Travellers BD</h1>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden sm:hidden">
          <button onClick={handleMenuToggle} className="text-yellow-500 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-4">
          {menuItems}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`fixed top-[70px] inset-0 bg-gray-900 bg-opacity-75 z-40 transform transition-transform ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="bg-white text-gray-800 w-full h-full relative">
          <ul className="bg-white space-y-4 py-4 px-10">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

