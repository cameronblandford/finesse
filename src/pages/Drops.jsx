import React, { useEffect } from "react";
import styles from "./Drops.module.scss";
import { useDispatch } from "react-redux";
import { fetchAllDrops } from "../store/dropsSlice";
import cx from "classnames";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import VertRara from "../assets/images/Drops-Vertical-Rara.jpg";
import VertBebe from "../assets/images/Drops-Vertical-Bebe.jpg";
import VertBella from "../assets/images/Drops-Vertical-Bella.jpg";
import VertBurbie from "../assets/images/Drops-Vertical-Burbie.jpg";
import VertJacko from "../assets/images/Drops-Vertical-Jacko.jpg";
import VertLana from "../assets/images/Drops-Vertical-Lana.jpg";
import VertLexi from "../assets/images/Drops-Vertical-Lexi.jpg";

const PhotoColumn = ({ img = "https://picsum.photos/500/800", name = "JACKIE" }) => {
  return (
    <Link to={`/drops-${name}`}>
      <div
        className={cx(styles.photoCol, "bg-gray-300")}
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className={styles.name}>{name}</div>
      </div>
    </Link>
  );
};

const Drops = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDrops());
  }, []);

  return (
    <div>
      <Helmet>
        <title>THE DROPS | FINESSE</title>
      </Helmet>
      <div className={styles.desktop}>
        <PhotoColumn img={VertLana} name="lana" />
        <PhotoColumn img={VertBebe} name="bebe" />
        <PhotoColumn img={VertLexi} name="lexi" />
        <PhotoColumn img={VertRara} name="rara" />
        <PhotoColumn img={VertBurbie} name="burbie" />
        <PhotoColumn img={VertBella} name="bella" />
        <PhotoColumn img={VertJacko} name="jacko" />
      </div>
      <div className={styles.mobile}>
        <div className={styles.grid}>
          <PhotoColumn img={VertLana} name="lana" />
          <PhotoColumn img={VertBebe} name="bebe" />
          <PhotoColumn img={VertLexi} name="lexi" />
          <PhotoColumn img={VertRara} name="rara" />
          <PhotoColumn img={VertBurbie} name="burbie" />
          <PhotoColumn img={VertBella} name="bella" />
          <PhotoColumn img={VertJacko} name="jacko" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Drops;
