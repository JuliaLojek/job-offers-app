import React from "react";
import styles from "./RemoveModal.module.css";

interface RemoveModalProps {
  id: number;
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveModal: React.FC<RemoveModalProps> = (props) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <p className={styles.text}>Are you sure you want to remove this offer?</p>
        <button className={styles.btn + " " + styles.mainBtn}>Remove</button>
        <button className={styles.btn} onClick={() => props.handleCloseModal(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default RemoveModal;