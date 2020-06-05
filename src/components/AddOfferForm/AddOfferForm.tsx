import React, { useState } from "react";
import styles from "./AddOfferForm.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { ACTION_ADD_OFFER } from "../../store/modules/actions";
import { OfferModel } from "../../models/models";

const AddOfferForm: React.FC = () => {
  const [companyInput, setCompanyInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [reqsInput, setReqsInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [cityError, setCityError] = useState("");
  const [reqsError, setReqsError] = useState("");

  const dispatch = useDispatch();
  const addNewOffer = (newOffer: OfferModel) =>
    dispatch(ACTION_ADD_OFFER(newOffer));

  const errorMsg = "Fill out this field. Don't use any special characters.";

  const validateInput = (input: string) => {
    let isValid = true;
    if (input.trim().length === 0) {
      isValid = false;
    }
    if (input.match(/[^a-zA-Z0-9 ]/g)) {
      isValid = false;
    }
    return isValid;
  };

  const clearInputs = () => {
    setCompanyInput("");
    setCityInput("");
    setReqsInput("");
    setNotesInput("");
  };

  const handleCompanyChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCompanyInput(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value)) {
      setCompanyError(errorMsg);
    } else {
      setCompanyError("");
    }
  };

  const handleCityChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCityInput(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value)) {
      setCityError(errorMsg);
    } else {
      setCityError("");
    }
  };

  const handleRequirementsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReqsInput(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value)) {
      setReqsError(errorMsg);
    } else {
      setReqsError("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      validateInput(companyInput) &&
      validateInput(cityInput) &&
      validateInput(reqsInput)
    ) {
      const newOffer: OfferModel = {
        id: Date.now(),
        company: companyInput.trim(),
        city: cityInput.trim(),
        req: reqsInput.trim().split(" "),
        notes: notesInput,
      };
      addNewOffer(newOffer);
      clearInputs();
    }
  };

  return (
    <div className={styles.mainBox}>
      <h3>Add new offer:</h3>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="companyName">
          Company name:
        </label>
        <input
          type="text"
          id="companyName"
          value={companyInput}
          className={styles.input}
          onChange={handleCompanyChange}
        />
        <p className={styles.errorBox}>{companyError}</p>

        <label className={styles.label} htmlFor="cityName">
          City name:
        </label>
        <input
          type="text"
          id="cityName"
          value={cityInput}
          className={styles.input}
          onChange={handleCityChange}
        />
        <p className={styles.errorBox}>{cityError}</p>

        <label className={styles.label} htmlFor="req">
          Job requirements:
        </label>
        <textarea
          id="req"
          value={reqsInput}
          className={styles.input + " " + styles.textarea}
          placeholder="enter requirements separeted by spaces"
          maxLength={240}
          onChange={handleRequirementsChange}
        />
        <p className={styles.errorBox}>{reqsError}</p>

        <label className={styles.label} htmlFor="notes">
          Notes:
        </label>
        <textarea
          id="notes"
          value={notesInput}
          className={styles.input + " " + styles.textarea}
          placeholder="additional notes, links, etc."
          maxLength={240}
          onChange={(event) => setNotesInput(event.target.value)}
        />
        <p className={styles.errorBox}></p>

        <Button text="Add offer" type="submit" />
      </form>
    </div>
  );
};

export default AddOfferForm;
