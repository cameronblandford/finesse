import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import cx from "classnames";
const defaultOptions = {
  dots: true,
  arrows: false,
  slidesToShow: 1,
  appendDots: (dots) => <ul className={cx("slick-dots", styles.pageContainer)}>{dots}</ul>,
  customPaging: () => <div className={styles.customPageElement}></div>,
};

const Carousel = ({ children, options = {} }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Slider {...defaultOptions} {...options}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
