import React from "react";
import styles from "./Page.module.css";
import Form from "../components/Form/Form";
import { useDispatch } from "react-redux";
import { OfferModel } from "../models/models";
import { ACTION_ADD_OFFER } from "../store/modules/actions";

const AddOfferPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <h3 className={styles.title}>Add new offer:</h3>
      <Form
        mainBtnText="Add offer"
        mainBtnAction={(newOffer: OfferModel) =>
          dispatch(ACTION_ADD_OFFER(newOffer))
        }
      />
    </main>
  );
};

export default AddOfferPage;
