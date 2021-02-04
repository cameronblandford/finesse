import React from "react";
import styles from "./ProductDetail.module.scss";
import cx from "classnames";

const DropDetail = () => {
  return (
    <div className={styles.dropDetailContainer}>
      <div className={styles.left}>
        <div className={styles.breadcrumb}> &lt;-- Back to drops </div>
      </div>
      <div className={styles.right}>
        <header className={styles.header}>
          <h1 className={cx(styles.hed, "text-xl")}>The Rara Drop</h1>
          <div className={styles.voteCount}>10,423 votes</div>
        </header>
        <div className={styles.price}>US$49.00</div>
        <hr />
        <div classNAme={styles.dek}>
          Boss chill baby vibes kinda fit. Relaxed but make it sexy. Cute but make it badass.
          G-chain necklace to handcuff anyone. You know ... if you need to ;) Sustainably made using
          advances in AI throughout our production pipeline. Sabreena is wearing XS, made for 5'6",
          31.5" chest, 25" waist, 35" hips. Free shipping &amp; free returns.
        </div>
        <hr />
        <div className={styles.sizeHed}>
          <div>Select Size</div>
          <div>Size Guide</div>
        </div>
        <div className={styles.sizeButtons}>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <div className={styles.addToBag}></div>
        <hr />
        <div>Shipping &amp; Returns</div>
        <hr />
        <div>Did you say more?</div>
        <div>related items go here</div>
      </div>
    </div>
  );
};

export default DropDetail;
