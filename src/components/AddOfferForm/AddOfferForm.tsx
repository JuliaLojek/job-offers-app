import React from "react";
import styles from "./AddOfferForm.module.css";
import Button from "../Button/Button";

const AddOfferForm: React.FC = () => {

  return (
    <div className={styles.mainBox}>
      <h3>Add new offer:</h3>
      <form className={styles.formBox}>
        <div className={styles.inputsBox}>
          <label htmlFor="cityName">City name:</label>
          <input
            type="text"
            id="cityName"
            className={styles.input}
            placeholder="e.g. Barcelona"
          />
          <p className={styles.errorBox}></p>

          <label htmlFor="req">Job requirements:</label>
          <textarea
            id="req"
            className={styles.input + " " + styles.textarea}
            placeholder="enter requirements separeted by spaces"
          />
          <p className={styles.errorBox}></p>
        </div>
        <div className={styles.inputsBox}>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            className={styles.input + " " + styles.textarea}
            placeholder="additional notes, links, etc."
          />
          <p className={styles.errorBox}></p>

          <Button text="Add offer" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddOfferForm;
