import React, { useEffect, useState } from "react";
import styles from "./DropDetail.module.scss";
import cx from "classnames";
import ProductTile from "../components/ProductTile";
import { fetchProductsByCollection } from "../store/dropsSlice";
import { useDispatch, useSelector } from "react-redux";
import getDropInfo, { getNextName, getPrevName } from "../util/dropIds";
// import ArrowBack from "../assets/icons/arrow-back.svg";
import Carousel from "../components/Carousel";
import Slider from "react-slick";
import Helmet from "react-helmet";
import Button from "../components/Button";
import LeftArrow from "../assets/icons/arrow-left.svg";
import RightArrow from "../assets/icons/arrow-right.svg";
import BackArrow from "../assets/icons/arrow-back.svg";
import "slick-carousel/slick/slick.css";
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
    // only fetch if it doesn't exist in redux
    if (!byId[dropId]) {
      dispatch(fetchProductsByCollection(dropId));
    }
  }, [dispatch, dropId, byId]);

  // set products using drop info
  useEffect(() => {
    setProducts(byId[dropId] || []);
  }, [byId, dropId, setProducts]);

  // carousel settings
  const socialCarouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3.5 } },
      { breakpoint: 700, settings: { slidesToShow: 2.5 } },
      { breakpoint: 500, settings: { slidesToShow: 2.2 } },
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
              <Link to="/drops">
                <img src={BackArrow} alt="Left arrow" className={styles.backArrow} /> Back to drops
              </Link>
            </div>
            <div className={cx(styles.prevArrow)}>
              <Link to={`/drops-${prevName}`}>
                <img src={LeftArrow} alt="Left arrow" />
                <span className={styles.hover}>{prevName}</span>
              </Link>
            </div>
            <div className={cx(styles.nextArrow)}>
              <Link to={`/drops-${nextName}`}>
                <span className={styles.hover}>{nextName}</span>{" "}
                <img src={RightArrow} alt="Right arrow" />
              </Link>
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
          31.5" chest, 25" waist, 35" hips. Free shipping & free returns.`}
          </div>
          <Button className={styles.desktopCTA}>View Episode</Button>
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
            <Link to={`/drops-${nextName}`}>{nextName} &gt;</Link>
          </div>
          <div className={cx(styles.prevArrow)}>
            <Link to={`/drops-${prevName}`}>&lt; {prevName}</Link>
          </div>
          {Array.isArray(drop.mobileImg) ? (
            <Carousel>
              {drop.mobileImg.map((x) => {
                return (
                  <img
                    className={styles.headerImg}
                    src={x}
                    alt={`A model wearing the full ${dropName} drop.`}
                  />
                );
              })}
            </Carousel>
          ) : (
            <img
              className={styles.headerImg}
              src={drop.mobileImg}
              alt={`A model wearing the full ${dropName} drop.`}
            />
          )}
        </div>
        <Button variant="yellow">Shop The Drop</Button>
        <div className={cx(styles.productGrid, styles[`products${products.length}`])}>
          {products.map((p) => (
            <ProductTile
              key={p.title}
              className={styles.product}
              name={p.title}
              price={p.variants[0].price}
              img={p.image && p.image.src}
            />
          ))}
          {/* {(products.length < 5 && products.length % 2 !== 0) ||
          (products.length > 5 && products.length % 2 === 0) ? (
            <div className={styles.product} />
          ) : null} */}
        </div>
        <div className={styles.influencerContent}>
          <div className={styles.hed}>The {dropName}</div>
          <div className={styles.subhed}>Influencer Content</div>
          <Slider {...socialCarouselSettings}>
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
          <Button variant="yellow">View Episode</Button>
        </div>
      </div>
    </div>
  );
};

export default DropDetail;
