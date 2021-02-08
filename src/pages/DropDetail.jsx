import React, { useEffect, useState } from "react";
import styles from "./DropDetail.module.scss";
import cx from "classnames";
import ProductTile from "../components/ProductTile";
import { fetchProductsByCollection } from "../store/dropsSlice";
import { useDispatch, useSelector } from "react-redux";
import getDropInfo, { getNextName, getPrevName } from "../util/dropIds";
// import ArrowBack from "../assets/icons/arrow-back.svg";
import Slider from "react-slick";
import Helmet from "react-helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DropDetail = ({ match }) => {
  // get drop info
  const dropName = match.params.id;
  const nextName = getNextName(dropName);
  const prevName = getPrevName(dropName);
  const drop = getDropInfo(match.params.id);
  const dropId = drop.id || 171868618829;
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  // fetch drop info by bucket
  const { byId = {} } = useSelector((state) => state.drops);

  // load drop products into respective id's bucket
  useEffect(() => {
    dispatch(fetchProductsByCollection(dropId));
  }, [dispatch, dropId]);

  // set products using drop info
  useEffect(() => {
    setProducts(byId[dropId] || []);
  }, [byId, dropId, setProducts]);

  // carousel settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3.5 } },
      { breakpoint: 700, settings: { slidesToShow: 2.5 } },
      { breakpoint: 500, settings: { slidesToShow: 1.5 } },
    ],
  };

  // instagram post
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
      <Helmet>
        <title>THE {dropName.toUpperCase()} | FINESSE</title>
      </Helmet>
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
              <Link to={`/drops/${nextName}`}>{nextName} ↓</Link>
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
            {(products.length < 5 && products.length % 2 !== 0) ||
            (products.length > 5 && products.length % 2 === 0) ? (
              <div className={styles.product} />
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.dropDetailContainerMobile}>
        <div className={styles.carousel}>
          <div className={cx(styles.nextArrow)}>
            <Link to={`/drops/${nextName}`}>{nextName} &gt;</Link>
          </div>
          <div className={cx(styles.prevArrow)}>
            <Link to={`/drops/${prevName}`}>&lt; {prevName}</Link>
          </div>
          <img
            className={styles.headerImage}
            src={drop.mobileImg}
            alt={`A model wearing the full ${dropName} drop.`}
          />
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
          {(products.length < 5 && products.length % 2 !== 0) ||
          (products.length > 5 && products.length % 2 === 0) ? (
            <div className={styles.product} />
          ) : null}
        </div>
        <div className={styles.influencerContent}>
          <div className={styles.hed}>The {dropName}</div>
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
