import React from "react";
import Logo from "../assets/images/Finesse-Logo_Black@2x.png";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
      <div className={styles.menuItems}>
        <div className={styles.navItem}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/drops">Drops</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/">Products</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/">Finesse TV</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/">About</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/">Careers</Link>
        </div>
      </div>
      <div className={styles.right}>
        CART
        <button>JOIN THE GANG</button>
      </div>
    </nav>
  );
};

export default Nav;
