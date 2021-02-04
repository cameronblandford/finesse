import React from "react";
import styles from "./ProductTile.module.scss";

const ProductTile = ({
  img = "https://picsum.photos/400/400",
  name = "Mesh Fashion Mask",
  price = "24.00",
}) => {
  return (
    <div className={styles.productTile} style={{ backgroundImage: `url("${img}")` }}>
      <div className={styles.productName}>
        <span className={styles.highlight}>
          {name}
          <br />
          US${price}
        </span>
      </div>
    </div>
  );
};

export default ProductTile;
