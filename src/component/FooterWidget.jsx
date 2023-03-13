import React from 'react';
import Styles from './FooterWidget.module.css';

const FooterWidget = () => {
  return (
   <div className={Styles.footerContainer}>
    <div className={Styles.footerWrapper}>
      <h1 className={Styles.welcomeText}>
        Welcome to
      </h1>
      <h3 className={Styles.subHeading}>
        Courage Non-profit Organization
      </h3>
      <hr className={Styles.horiz} style={{height:'4.5px', width:'200px'}}/>
    </div>
   </div>
  )
}

export default FooterWidget