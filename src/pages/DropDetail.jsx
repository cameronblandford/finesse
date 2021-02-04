import React, { useEffect, useState } from "react";
import styles from "./DropDetail.module.scss";
import cx from "classnames";
import ProductTile from "../components/ProductTile";
import { fetchProductsByCollection } from "../store/dropsSlice";
import { useDispatch, useSelector } from "react-redux";
import RaraSplash from "../assets/images/Drops-Bubble-Rara.jpg";
import getDropInfo from "../util/dropIds";
const DropDetail = ({ match }) => {
  const drop = getDropInfo(match.params.id);
  const dropId = drop.id || 171868618829;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsByCollection(dropId));
  }, []);
  const [products, setProducts] = useState([]);
  const { byId = {} } = useSelector((state) => state.drops);

  useEffect(() => {
    setProducts(byId[dropId] || []);
  }, [byId[dropId]]);

  return (
    <div className={styles.dropDetailContainer}>
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <img src={drop.img} />
        </div>
      </div>
      <div className={styles.right}>
        <header className={styles.header}>
          <h1 className={cx(styles.hed)}>The {match.params.id} Drop</h1>
          <div className={styles.voteCount}>10,423 votes</div>
        </header>
        <hr />
        <div className={styles.dek}>
          Boss chill baby vibes kinda fit. Relaxed but make it sexy. Cute but make it badass.
          G-chain necklace to handcuff anyone. You know ... if you need to ;) Sustainably made using
          advances in AI throughout our production pipeline. Sabreena is wearing XS, made for 5'6",
          31.5" chest, 25" waist, 35" hips. Free shipping &amp; free returns.
        </div>
        <hr />
        <h3>Shop the drop</h3>
        <hr />
        <div className={styles.dropShopGrid}>
          {products.map((p) => (
            <ProductTile name={p.title} price={p.variants[0].price} img={p.image.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDetail;
