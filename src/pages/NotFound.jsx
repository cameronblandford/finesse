import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.hed}>404 - Not Found</h1>
        <p className={styles.dek}>
          The link is broken or the page has been moved. Try these instead:{" "}
          <Link to="/drops">Drops</Link> / <Link to="/drops-bebe">Bebe</Link> /{" "}
          <Link to="/drops-lana">Lana</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
