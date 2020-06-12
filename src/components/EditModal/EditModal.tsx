import React from "react";
import styles from "./EditModal.module.css";
import { useDispatch } from "react-redux";
import { ACTION_EDIT_OFFER } from "../../store/modules/actions";
import { OfferModel } from "../../models/models";
import Form from "../Form/Form";

interface EditModalProps {
  id: number;
  company: string;
  city: string;
  req: string;
  notes: string;
  handleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { id, company, city, req, notes, handleCloseModal } = props;
  const dispatch = useDispatch();
  const editOffer = (offer: OfferModel) => dispatch(ACTION_EDIT_OFFER(offer));
  const handleEdit = (offer: OfferModel) => {
    editOffer(offer);
    props.handleCloseModal(false);
  };
  const actionCloseModal = () => {
    handleCloseModal(false);
  };

  return (
    <div className={styles.modalBackground}>
      <Form
        mainBtnText="Edit offer"
        mainBtnAction={handleEdit}
        optionalBtnText="Cancel"
        optionalBtnAction={actionCloseModal}
        id={id}
        company={company}
        city={city}
        req={req}
        notes={notes}
      />
    </div>
  );
};

export default EditModal;
