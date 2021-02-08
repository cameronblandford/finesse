import React from "react";
import styles from "./ProductTile.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

const ProductTile = ({
  img = "https://picsum.photos/400/400",
  name = "Mesh Fashion Mask",
  price = "24.00",
  className,
}) => {
  return (
    <Link to={`/product/${name}`} className={className}>
      <div className={cx(styles.productTile)}>
        <img className={styles.img} src={img} alt={styles.productName} />
        <div className={styles.productName}>
          <span className={styles.highlight}>
            {name}
            <br />
            US${price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
