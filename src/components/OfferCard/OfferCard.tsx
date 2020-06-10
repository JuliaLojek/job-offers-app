import React, { useState } from "react";
import styles from "./OfferCard.module.css";
import { OfferModel } from "../../models/models";
import editBtn from "../../img/icons8-edit-g.png";
import removeBtn from "../../img/icons8-remove-g.png";
import moment from "moment";
import RemoveModal from "../RemoveModal/RemoveModal";
import EditModal from "../EditModal/EditModal";

const OfferCard: React.FC<OfferModel> = (props) => {
  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [isRemoveModalActive, setIsRemoveModalActive] = useState(false);
  const { id, company, city, req, notes } = props;
  const reqAsString = req.join(", ");

  return (
    <React.Fragment>
      <div className={styles.card}>
        <h4 className={styles.company}>{company}</h4>
        <h5 className={styles.city}>{city}</h5>
        <p className={styles.text}>
          <b>Requirements: </b>
          {reqAsString}
        </p>
        <p className={styles.text}>
          <b>Notes: </b>
          {notes}
        </p>
        <div className={styles.editPart}>
          <p className={styles.date}>
            added: {moment(id).format("DD.MM.YYYY")}
          </p>
          <div>
            <div
              className={styles.imgWrap}
              onClick={() => setIsEditModalActive(true)}
            >
              <p className={styles.imgInfo}>edit</p>
              <img className={styles.img} src={editBtn} alt="edit" />
            </div>
            <div
              className={styles.imgWrap}
              onClick={() => setIsRemoveModalActive(true)}
            >
              <p className={styles.imgInfo}>remove</p>
              <img className={styles.img} src={removeBtn} alt="remove" />
            </div>
          </div>
        </div>
      </div>

      {isEditModalActive && (
        <EditModal
          id={id}
          company={company}
          city={city}
          req={reqAsString}
          notes={notes}
          handleCloseModal={setIsEditModalActive}
        />
      )}

      {isRemoveModalActive && (
        <RemoveModal id={id} handleCloseModal={setIsRemoveModalActive} />
      )}
    </React.Fragment>
  );
};

export default OfferCard;
