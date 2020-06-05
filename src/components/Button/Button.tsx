import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className={props.isActive ? styles.btn + " " + styles.active : styles.btn}
    >
      {props.text}
    </button>
  );
};

export default Button;
