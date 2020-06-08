import React from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  type: "added" | "edited" | "removed";
}

const Toast: React.FC<ToastProps> = (props) => {
  const printText = (type: ToastProps["type"]) => {
    switch (type) {
      case "added":
        return "Offer added!";
      case "edited":
        return "Offer edited!";
      case "removed":
        return "Offer removed!";
    }
  };

  return <div className={styles.toast}>
    <p className={styles.text}>{printText(props.type)}</p>
  </div>;
};

export default Toast;
