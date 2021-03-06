import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../assets/images/Finesse-Logo_Black@2x.png";
import Twitter from "../assets/icons/twitter.png";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Youtube from "../assets/icons/youtube.png";
const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.left}>
            <div>© FINESSE US INC 2021</div>
            <div>Support</div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
          <div className={styles.right}>
            <a href="/placeholder" className={styles.shippingLink}>
              Shipping and returns
            </a>
            <a href="https://instagram.com/finesseusstudios" className={styles.socialLink}>
              <img src={Instagram} alt="Instagram Logo" />
            </a>
            <a href="https://twitter.com/finesse__us" className={styles.socialLink}>
              <img src={Twitter} alt="Twitter Logo" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCTz6Mf3YefiTBq_YofQtxHw"
              className={styles.socialLink}
            >
              <img src={Youtube} alt="Youtube Logo" />
            </a>
            <a href="https://facebook.com/finesseusinc" className={styles.socialLink}>
              <img src={Facebook} alt="Facebook Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerMobile}>
        <img
          src={Logo}
          className={styles.logo}
          alt="A barcode with 'Finesse' under it, Finesse's logo."
        />
        <div className={styles.dek}>© FINESSE US INC 2021</div>
      </div>
    </>
  );
};

export default Footer;
