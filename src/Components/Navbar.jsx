import {FaBarsStaggered} from "react-icons/fa6";
import  {useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [navBtns, setNavBtns] = useState(false)
  const navLinks = useRef()

  const navShow = () => {
    if (navBtns === false) {
      navLinks.current.style.top = "80px";
    }else{
      navLinks.current.style.top = "-10000px";
    }
    
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container flex h-20 max-w-full items-center justify-between bg-black md:rounded-b-[5rem] md:px-12 lg:px-14"
    >
      <div className="logo">
        <a href="/">
        <img src="/logo.png" className="w-14" alt="LOGO" />
        </a>
      </div>
      <ul className="hidden gap-5 text-lg md:flex lg:gap-7 lg:text-xl">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link font-bold after:w-full"
                : "nav-link font-bold hover:after:w-full"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link font-bold after:w-full"
                : "nav-link font-bold hover:after:w-full"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link font-bold after:w-full"
                : "nav-link font-bold hover:after:w-full"
            }
            to="/project"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link font-bold after:w-full"
                : "nav-link font-bold hover:after:w-full"
            }
            to={'/reviews'}
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link font-bold after:w-full"
                : "nav-link font-bold hover:after:w-full"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <ul
        ref={navLinks}
        className="absolute -top-[700px] left-0 z-50 w-full space-y-3  bg-black py-4 text-center md:hidden"
      >
        <li onClick={navShow}>
          <NavLink
            onClick={() => setNavBtns(false)}
            className="lg:nav-link font-bold hover:after:w-full"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li onClick={navShow}>
          <NavLink
            onClick={() => setNavBtns(false)}
            className="lg:nav-link font-bold hover:after:w-full"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li onClick={navShow}>
          <NavLink
            onClick={() => setNavBtns(false)}
            className="lg:nav-link font-bold hover:after:w-full"
            to="/project"
          >
            Projects
          </NavLink>
        </li>
        <li onClick={navShow}>
          <NavLink
            onClick={() => setNavBtns(false)}
            className="lg:nav-link font-bold hover:after:w-full"
            to="/reviews"
          >
            Reviews
          </NavLink>
        </li>
        <li onClick={navShow}>
          <NavLink
            onClick={() => setNavBtns(false)}
            className="lg:nav-link font-bold hover:after:w-full"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="md:hidden" onClick={navShow}>
        {navBtns ? (
          <IoClose size={33} onClick={() => setNavBtns(false)} />
        ) : (
          <FaBarsStaggered size={25} onClick={() => setNavBtns(true)} />
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar