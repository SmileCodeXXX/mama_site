import React from 'react'
import Styles from './NavBarWidget.module.css';
import {FaSearch,FaFacebookF,FaInstagram , FaTwitter,FaLinkedinIn} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const NavBarWidget = () => {
  return (
    <>
    <div className={Styles.navContainer}>
    <div className={Styles.topNav}>
    <div className={Styles.navWrapper}>
          <FaSearch/>
          <FaInstagram/>
          <FaFacebookF/>
          <FaTwitter/>
          <FaLinkedinIn/>
    </div>
    </div>
    <div className={Styles.navbar}>
        <div className={Styles.logo}>Non Profit</div>
        <ul>
          <li><Link to={'about'}>About</Link></li>
          <li><Link to={'about'}>Resource</Link></li>
          <li><Link to={'event'}>Events</Link></li>
          <li><Link to={'contact'}>Contact</Link></li>
        </ul>
        <button>Donate</button>
    </div>
  </div>
  <Outlet/>
    </>
  
  )
}

export default NavBarWidget