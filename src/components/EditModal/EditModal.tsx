import React from "react";
import styles from "./EditModal.module.css";
import { useDispatch } from "react-redux";
import { ACTION_EDIT_OFFER } from "../../store/modules/actions";
import { OfferModel } from "../../models/models";

interface EditModalProps {
  offer: OfferModel;
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const dispatch = useDispatch();
  const editOffer = (offer: OfferModel) => dispatch(ACTION_EDIT_OFFER(offer));
  const handleEdit = (offer: OfferModel) => {
    editOffer(offer);
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
        onClick={() => handleEdit(props.offer)}
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

export default EditModal;
