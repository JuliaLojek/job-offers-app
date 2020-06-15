import React from "react";
import styles from "./Toast.module.css";
import { useDispatch } from "react-redux";
import { ACTION_SHOW_ADDED_INFO } from "../../store/modules/actions";

interface ToastProps {
  type: "added" | "edited" | "removed";
  isActive: boolean;
}

const Toast: React.FC<ToastProps> = (props) => {
  const dispatch = useDispatch();
  const closeInfo = () => dispatch(ACTION_SHOW_ADDED_INFO(false));

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

  return (
    <div
      className={
        props.isActive ? [styles.toast, styles.active].join(" ") : styles.toast
      }
    >
      <p className={styles.text}>{printText(props.type)}</p>
      <p className={styles.btn} onClick={closeInfo}>&#10005;</p>
    </div>
  );
};

export default Toast;
