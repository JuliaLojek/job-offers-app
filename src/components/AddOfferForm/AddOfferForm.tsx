import React, { useState, useEffect } from "react";
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

  const [isBtnActive, setIsBtnActive] = useState(false);

  const [companyError, setCompanyError] = useState("");
  const [cityError, setCityError] = useState("");
  const [reqsError, setReqsError] = useState("");

  const dispatch = useDispatch();
  const addNewOffer = (newOffer: OfferModel) =>
    dispatch(ACTION_ADD_OFFER(newOffer));

  const errorMsg = "Fill out this field. Don't use any special characters.";

  const validateInput = (input: string, isCommaAccepted?: boolean) => {
    let isValid = true;
    isValid = isValid && input.trim().length > 0;
    if (isCommaAccepted) {
      isValid = isValid && !input.match(/[^a-zA-Z0-9, ]/g);
    } else {
      isValid = isValid && !input.match(/[^a-zA-Z0-9 ]/g);
    }
    return isValid;
  };

  const clearInputs = () => {
    setCompanyInput("");
    setCityInput("");
    setReqsInput("");
    setNotesInput("");
    setIsBtnActive(false);
  };

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    inputCallback: (value: React.SetStateAction<string>) => void,
    errorCallback: (value: React.SetStateAction<string>) => void
  ) => {
    inputCallback(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value)) {
      errorCallback(errorMsg);
    } else {
      errorCallback("");
    }
  };

  const handleReqsInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReqsInput(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value, true)) {
      setReqsError("Fill out this field. Use commas to separate requirements.");
    } else {
      setReqsError("");
    }
  };

  const handleBtnChange = () => {
    if (
      companyInput &&
      cityInput &&
      reqsInput &&
      !companyError &&
      !cityError &&
      !reqsError
    ) {
      setIsBtnActive(true);
    } else {
      setIsBtnActive(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      validateInput(companyInput) &&
      validateInput(cityInput) &&
      validateInput(reqsInput, true)
    ) {
      const newOffer: OfferModel = {
        id: Date.now(),
        company: companyInput.trim(),
        city: cityInput.trim(),
        req: reqsInput.split(",").map(req => req.trim()),
        notes: notesInput.trim(),
      };
      addNewOffer(newOffer);
      clearInputs();
    }
  };

  useEffect(() => {
    handleBtnChange();
    console.log("rerendered");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyInput, cityInput, reqsInput, companyError, cityError, reqsError]);

  return (
    <div className={styles.mainBox}>
      <h3 className={styles.title}>Add new offer:</h3>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="companyName">
          Company name:
        </label>
        <input
          type="text"
          id="companyName"
          value={companyInput}
          className={styles.input}
          onChange={(event) =>
            handleInputChange(event, setCompanyInput, setCompanyError)
          }
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
          onChange={(event) =>
            handleInputChange(event, setCityInput, setCityError)
          }
        />
        <p className={styles.errorBox}>{cityError}</p>

        <label className={styles.label} htmlFor="req">
          Job requirements:
        </label>
        <textarea
          id="req"
          value={reqsInput}
          className={styles.input + " " + styles.textarea}
          placeholder="enter requirements separated by commas"
          maxLength={240}
          onChange={(event) => handleReqsInputChange(event)}
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

        <Button text="Add offer" type="submit" isActive={isBtnActive} />
      </form>
    </div>
  );
};

export default AddOfferForm;
