import React from 'react'
import FooterWidget from '../component/FooterWidget';
import HeroWidget from '../component/HeroWidget';
//import NavBarWidget from "../component/NavBarWidget";


import Styles from "./HomePage.module.css";

const HomePage = () => {
  return (
   <div className={Styles.Container}>
    <HeroWidget/>
    <FooterWidget/>
   </div>
  )
}


export default HomePage