import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button type={props.type} className={styles.btn}>{props.text}</button>;
};

export default Button;
