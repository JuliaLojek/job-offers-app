import React from "react";
import styles from "./RemoveModal.module.css";
import { useDispatch } from "react-redux";
import { ACTION_DELETE_OFFER } from "../../store/modules/actions";

interface RemoveModalProps {
  id: number;
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveModal: React.FC<RemoveModalProps> = (props) => {
  const dispatch = useDispatch();
  const removeOffer = (id: number) => dispatch(ACTION_DELETE_OFFER(id));
  const handleRemove = (id: number) => {
    removeOffer(id);
    props.handleCloseModal(false);
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <p className={styles.text}>
          Are you sure you want to remove this offer?
        </p>
        <button
        className={styles.btn + " " + styles.mainBtn}
        onClick={() => handleRemove(props.id)}
        >Remove</button>
        <button
          className={styles.btn}
          onClick={() => props.handleCloseModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RemoveModal;
