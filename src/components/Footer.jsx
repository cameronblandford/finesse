import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../assets/images/Finesse-Logo_Black@2x.png";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <img src={Logo} alt="A barcode with 'Finesse' under it, Finesse's logo." />
      </div>
    </div>
  );
};

export default Footer;
