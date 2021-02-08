import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

const Button = ({ children, variant = "black", ...rest }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.black]: variant === "black",
        [styles.yellow]: variant === "yellow",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
