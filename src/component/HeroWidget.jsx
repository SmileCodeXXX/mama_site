import React,{useEffect,useState} from 'react'
import Styles from './HeroWidget.module.css';

import heroOne from '../assets/image1.webp'
import heroTwo from '../assets/image2.webp'
import heroThree from '../assets/image3.webp'
import heroFour from '../assets/image4.webp'




const HeroWidget = () => {

  const [slide,setSlide] = useState([
    {
    imageUrl: heroOne,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: heroTwo,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: heroThree,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageUrl: heroFour,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
])


  return (
    <div className={Styles.HeroContainer}>
        <img src={slide[3].imageUrl} alt="hero"  className={Styles} />
        <div className="caption"></div>
    </div>
  )
}

export default HeroWidget