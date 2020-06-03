import React from "react";
import styles from "./AddOfferForm.module.css";
import Button from "../Button/Button";

const AddOfferForm: React.FC = () => {
  return (
    <div className={styles.formBox}>
      <h3>Add new offer:</h3>
      <form>
        <div className={styles.leftBox}>
          <label htmlFor="cityName">City name:</label>
          <input type="text" id="cityName" placeholder="e.g. Barcelona" />
          <label htmlFor="req">Job requirements:</label>
          <textarea
            id="req"
            placeholder="enter requirements separeted by spaces"
          />
        </div>
        <div className={styles.rightBox}>
          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" placeholder="additional notes, links, etc." />
          <Button text="Add!" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddOfferForm;
