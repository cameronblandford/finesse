import React, { useState } from "react";
import Logo from "../assets/images/Finesse-Logo_Black@2x.png";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
const Nav = () => {
  // hide when scrolling up
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  };
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { to: "/", name: "Home" },
    {
      to: "/drops",
      name: "Drops",
      children: [
        {
          to: "/drops/bebe",
          name: "Bebe",
        },
      ],
    },
    { to: "/", name: "Products" },
    { to: "/", name: "Finesse TV" },
    { to: "/", name: "About" },
    { to: "/", name: "Careers" },
  ];
  return (
    <nav className={styles.nav} id="navbar">
      <div className={styles.brand}>
        <img src={Logo} alt="Bar code with 'Finesse' written under it, Finesse's logo" />
      </div>
      <div className={cx(styles.menuItems, { [styles.open]: navOpen })}>
        {links.map((link) => (
          <div className={styles.navItem}>
            <Link to={link.to}>{link.name}</Link>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <button className={styles.cart}>
          {/* TODO: extract this into its own component */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
            <g>
              <g>
                <g>
                  <path
                    fill="#010203"
                    d="M10.688 12.802H1.614V4.76h1.031v1.547a.516.516 0 1 0 1.031 0V4.759h4.95v1.547a.516.516 0 1 0 1.031 0V4.759h1.031zM6.151 1.666c1.224 0 2.243.893 2.44 2.062h-4.88a2.479 2.479 0 0 1 2.44-2.062zm5.053 2.062H9.633A3.51 3.51 0 0 0 6.15.635 3.51 3.51 0 0 0 2.67 3.728H1.099a.516.516 0 0 0-.516.516v9.074c0 .284.23.515.516.515h10.105c.284 0 .515-.23.515-.515V4.244a.516.516 0 0 0-.515-.516z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div
          className={cx(styles.burger, { [styles.open]: navOpen })}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span />
          <span />
        </div>
        <button className={styles.joinButton}>JOIN THE GANG</button>
      </div>
    </nav>
  );
};

export default Nav;
