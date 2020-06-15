import React from "react";
import styles from "./Toast.module.css";
import { useDispatch } from "react-redux";
import {
  ACTION_SHOW_ADDED_INFO,
  ACTION_SHOW_EDITED_INFO,
  ACTION_SHOW_DELETED_INFO,
} from "../../store/modules/actions";

interface ToastProps {
  type: "added" | "edited" | "removed";
  isActive: boolean;
}

const Toast: React.FC<ToastProps> = (props) => {
  const dispatch = useDispatch();
  const closeInfo = (action: ToastProps["type"]) => {
    switch (action) {
      case "added":
        dispatch(ACTION_SHOW_ADDED_INFO(false));
        break;
      case "edited":
        dispatch(ACTION_SHOW_EDITED_INFO(false));
        break;
      case "removed":
        dispatch(ACTION_SHOW_DELETED_INFO(false));
        break;
    }
  };

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
      <p className={styles.btn} onClick={() => closeInfo(props.type)}>
        &#10005;
      </p>
    </div>
  );
};

export default Toast;
