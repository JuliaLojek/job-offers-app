import React from "react";
import styles from "./OfferCard.module.css";
import { OfferModel } from "../../models/models";
import editBtn from "../../img/icons8-edit-g.png";
import removeBtn from "../../img/icons8-remove-g.png";
import moment from "moment";

const OfferCard: React.FC<OfferModel> = (props) => {
  return (
    <div className={styles.card}>
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
      <div className={styles.editPart}>
        <p className={styles.date}>
          added: {moment(props.id).format("DD.MM.YYYY")}
        </p>
        <div>
          <div className={styles.imgWrap}>
            <p className={styles.imgInfo}>edit</p>
            <img className={styles.img} src={editBtn} alt="edit" />
          </div>
          <div className={styles.imgWrap}>
            <p className={styles.imgInfo}>remove</p>
          <img className={styles.img} src={removeBtn} alt="remove" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
