import React, { useState, useEffect } from "react";
import styles from "./Drops.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDrops } from "../store/dropsSlice";
import cx from "classnames";
import Footer from "../components/Footer";
import ProductTile from "../components/ProductTile";

import VertRara from "../assets/images/Drops-Vertical-Rara.jpg";
import VertBebe from "../assets/images/Drops-Vertical-Bebe.jpg";
import VertBella from "../assets/images/Drops-Vertical-Bella.jpg";
import VertBurbie from "../assets/images/Drops-Vertical-Burbie.jpg";
import VertJacko from "../assets/images/Drops-Vertical-Jacko.jpg";
import VertLana from "../assets/images/Drops-Vertical-Lana.jpg";
import VertLexi from "../assets/images/Drops-Vertical-Lexi.jpg";

const PhotoColumn = ({ img = "https://picsum.photos/500/800", name = "JACKIE" }) => {
  return (
    <div
      className={cx(styles.photoCol, "bg-gray-300")}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className={styles.name}>{name}</div>
    </div>
  );
};

const Drops = () => {
  const dispatch = useDispatch();
  const { allDrops, counter } = useSelector((state) => state.drops);

  useEffect(() => {
    dispatch(fetchAllDrops());
  }, []);

  return (
    <div>
      <div className={styles.desktop}>
        <PhotoColumn img={VertLana} />
        <PhotoColumn img={VertBebe} />
        <PhotoColumn img={VertLexi} />
        <PhotoColumn img={VertRara} />
        <PhotoColumn img={VertBurbie} />
        <PhotoColumn img={VertBella} />
        <PhotoColumn img={VertJacko} />
      </div>
      <div className={styles.mobile}>
        <div className={styles.grid}>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
          <div className={styles.DropBox}>
            <ProductTile />
          </div>
        </div>
      </div>

      {/* <input value={newVal} onChange={(e) => setNewVal(e.target.value)} placeholder={"Change me"} />
      <button onClick={() => dispatch(fetchAllDrops())}>Press me!</button>
      <div>counter: {counter}</div>
      <pre>{allDrops.length}</pre> */}
      <Footer />
    </div>
  );
};

export default Drops;
