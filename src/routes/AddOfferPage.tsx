import React from "react";
import styles from "./Page.module.css";
import Form from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { OfferModel } from "../models/models";
import { ACTION_ADD_OFFER, ACTION_SHOW_ADDED_INFO } from "../store/modules/actions";
import Toast from "../components/Toast/Toast";
import { selectIsAddedInfoActive } from "../store/modules/selectors";
import { StateModel } from "../store/modules/models";

const AddOfferPage: React.FC = () => {
  const dispatch = useDispatch();
  const isToastActive = useSelector((state: StateModel) =>
    selectIsAddedInfoActive(state)
  );
  const addOffer = (newOffer: OfferModel) => {
    dispatch(ACTION_ADD_OFFER(newOffer));
    dispatch(ACTION_SHOW_ADDED_INFO(true));
    setTimeout(() => dispatch(ACTION_SHOW_ADDED_INFO(false)), 3000);
  };

  return (
    <React.Fragment>
      <main className={styles.main}>
        <h3 className={styles.title}>Add new offer:</h3>
        <Form mainBtnText="Add offer" mainBtnAction={addOffer} />
      </main>
      <Toast type="added" isActive={isToastActive ? true : false} />
    </React.Fragment>
  );
};

export default AddOfferPage;
