import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      <img src="../images/greensol.svg" alt="Greensol logo" />

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </div>

      <div className={`${styles.navbarLinks} ${isOpen ? styles.showMenu : ''}`}>
        <p>Solutions</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Partner With Us</p>
        <button className={styles.navBtn}>Get a quote</button>
      </div>
    </div>
  );
};

export default Navbar;
