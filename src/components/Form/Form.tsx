import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { ACTION_ADD_OFFER } from "../../store/modules/actions";
import { OfferModel } from "../../models/models";
import { validateInput, handleInputChange } from "./FormUtils";

const Form: React.FC = () => {
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

  const clearInputs = () => {
    setCompanyInput("");
    setCityInput("");
    setReqsInput("");
    setNotesInput("");
    setIsBtnActive(false);
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
        req: reqsInput.split(",").map((req) => req.trim()),
        notes: notesInput.trim(),
      };
      addNewOffer(newOffer);
      clearInputs();
    }
  };

  useEffect(() => {
    handleBtnChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyInput, cityInput, reqsInput, companyError, cityError, reqsError]);

  return (
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

      <button
        className={[
          styles.btn,
          isBtnActive ? styles.mainBtn : styles.inactiveBtn,
        ].join(" ")}
        type="submit"
      >
        Add offer
      </button>
      {/* {props.secondaryBtn && (
        <button
          className={styles.btn}
          onClick={() => props.handleCloseModal(false)}
        >
          Cancel
        </button>
      )} */}
    </form>
  );
};

export default Form;
