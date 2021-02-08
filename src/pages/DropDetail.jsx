import React, { useEffect, useState } from "react";
import styles from "./DropDetail.module.scss";
import cx from "classnames";
import ProductTile from "../components/ProductTile";
import { fetchProductsByCollection } from "../store/dropsSlice";
import { useDispatch, useSelector } from "react-redux";
import getDropInfo, { getNextName, getPrevName } from "../util/dropIds";
import ArrowBack from "../assets/icons/arrow-back.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DropDetail = ({ match }) => {
  const dropName = match.params.id;
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
  }, [byId, dropId, setProducts]);

  const nextName = getNextName(dropName);
  const prevName = getPrevName(dropName);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.5,
  };

  const SocialPost = () => {
    return (
      <div className={styles.socialPost}>
        <img className={styles.socialImage} alt="" src={drop.img} />
        <div className={styles.footer}>
          <img className={styles.authorImage} alt="" src={drop.img} />
          <div className={styles.authorHandle}>@pete.davidson</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.dropDetailContainerDesktop}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            {/* NAVIGATION */}
            <div className={styles.backToDrops}>
              <Link to="/drops">↖ Back to drops</Link>
            </div>
            <div className={cx(styles.prevArrow, "transform rotate-90")}>
              <Link to={`/drops/${prevName}`}>{prevName} ↓</Link>
            </div>
            <div className={cx(styles.nextArrow, "transform -rotate-90")}>
              <Link href={`/drops/${nextName}`}>{nextName} ↓</Link>
            </div>
            {/* SPLASH IMAGE */}
            <img className={styles.img} src={drop.img} alt={`The full "${dropName}" outfit`} />
          </div>
        </div>
        <div className={styles.right}>
          <header className={styles.header}>
            <h1 className={cx(styles.hed)}>The {match.params.id} Drop</h1>
            <div className={styles.voteCount}>10,423 votes</div>
          </header>
          <hr />
          <div className={styles.dek}>
            {drop.dek ||
              `Boss chill baby vibes kinda fit. Relaxed but make it sexy. Cute but make it badass.
          G-chain necklace to handcuff anyone. You know ... if you need to ;) Sustainably made using
          advances in AI throughout our production pipeline. Sabreena is wearing XS, made for 5'6",
          31.5" chest, 25" waist, 35" hips. Free shipping & free returns`}
            .
          </div>
          <h3>Shop the drop</h3>
          <hr />
          <div className={styles.dropShopGrid}>
            {products.map((p) => (
              <ProductTile
                key={p.title}
                className={styles.product}
                name={p.title}
                price={p.variants[0].price}
                img={p.image && p.image.src}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.dropDetailContainerMobile}>
        <div className={styles.carousel}>
          <img className={styles.headerImage} src={drop.mobileImg} />
        </div>
        <div className={styles.shopHeader}>Shop the drop</div>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <ProductTile
              key={p.title}
              className={styles.product}
              name={p.title}
              price={p.variants[0].price}
              img={p.image && p.image.src}
            />
          ))}
        </div>
        <div className={styles.influencerContent}>
          <div className={styles.hed}>The Avani</div>
          <div className={styles.subhed}>Influencer Content</div>
          <Slider {...settings}>
            <SocialPost />
            <SocialPost />
            <SocialPost />
            <SocialPost />
            <SocialPost />
            <SocialPost />
          </Slider>
        </div>
        <div className={styles.episodeTile}>
          <div className={styles.episodeImg}>
            <img src={drop.img} alt="" />
          </div>
          <div className={styles.shopHeader}>View Episode</div>
        </div>
      </div>
    </div>
  );
};

export default DropDetail;
