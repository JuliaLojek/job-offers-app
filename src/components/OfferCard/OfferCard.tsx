import React from "react";
import styles from "./OfferCard.module.css";
import { OfferModel } from "../../models/models";
import editBtn from "../../img/icons8-edit.svg";
import removeBtn from "../../img/icons8-remove.svg";
import moment from "moment";

const OfferCard: React.FC<OfferModel> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.editPart}>
        <p className={styles.date}>
          added: {moment(props.id).format("DD.MM.YYYY")}
        </p>
        <img className={styles.img} src={editBtn} alt="edit" />
        <img className={styles.img} src={removeBtn} alt="remove" />
      </div>
      <h4 className={styles.company}>{props.company.toUpperCase()}</h4>
      <h5 className={styles.city}>{props.city.toUpperCase()}</h5>
      <p className={styles.text}>
        <b>Requirements: </b>
        {props.req.join(", ").toLowerCase()}
      </p>
      <p className={styles.text}>
        <b>Notes: </b>
        {props.notes}
      </p>
    </div>
  );
};

export default OfferCard;
