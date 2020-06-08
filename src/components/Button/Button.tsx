import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  isActive: boolean;
  type?: "button" | "submit" | "reset";
  handleClick?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.handleClick}
      className={props.isActive ? styles.btn + " " + styles.active : styles.btn}
    >
      {props.text}
    </button>
  );
};

export default Button;
