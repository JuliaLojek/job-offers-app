import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { OfferModel } from "../../models/models";
import {
  validateInput,
  handleInputChange,
  handleReqsInputChange,
} from "./FormUtils";

interface FormProps {
  mainBtnText: string;
  mainBtnAction: Function;
  optionalBtnText?: string;
  optionalBtnAction?: Function;
  id?: number;
  company?: string;
  city?: string;
  req?: string;
  link?: string;
  notes?: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [companyInput, setCompanyInput] = useState(
    props.company ? props.company : ""
  );
  const [cityInput, setCityInput] = useState(props.city ? props.city : "");
  const [reqsInput, setReqsInput] = useState(props.req ? props.req : "");
  const [linkInput, setLinkInput] = useState(props.link ? props.link : "");
  const [notesInput, setNotesInput] = useState(props.notes ? props.notes : "");

  const [isBtnActive, setIsBtnActive] = useState(false);

  const [companyError, setCompanyError] = useState("");
  const [cityError, setCityError] = useState("");
  const [reqsError, setReqsError] = useState("");

  const mainBtnAction = props.mainBtnAction;

  const clearInputs = () => {
    setCompanyInput("");
    setCityInput("");
    setReqsInput("");
    setLinkInput("");
    setNotesInput("");
    setIsBtnActive(false);
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
        id: props.id || Date.now(),
        company: companyInput.trim().toUpperCase(),
        city: cityInput.trim().toUpperCase(),
        req: reqsInput.split(",").map((req) => req.trim().toLowerCase()),
        link: linkInput.trim(),
        notes: notesInput.trim(),
      };
      mainBtnAction(newOffer);
      clearInputs();
    }
  };

  const handleOptionalButtonClick = () => {
    if (props.optionalBtnAction) {
      props.optionalBtnAction();
    }
  };

  useEffect(() => {
    handleBtnChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyInput, cityInput, reqsInput, companyError, cityError, reqsError]);

  return (
    <form className={styles.formBox} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="companyName">
        Company name*:
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
        City name*:
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
        Job requirements*:
      </label>
      <textarea
        id="req"
        value={reqsInput}
        className={styles.input + " " + styles.textarea}
        placeholder="enter requirements separated by commas"
        maxLength={240}
        onChange={(event) =>
          handleReqsInputChange(event, setReqsInput, setReqsError)
        }
      />
      <p className={styles.errorBox}>{reqsError}</p>

      <label className={styles.label} htmlFor="link">
        Link:
      </label>
      <input
        type="text"
        id="link"
        value={linkInput}
        className={styles.input}
        onChange={(event) =>
          setLinkInput(event.target.value)
        }
      />
      <p className={styles.errorBox}></p>

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
        {props.mainBtnText}
      </button>
      {props.optionalBtnText && props.optionalBtnAction && (
        <button className={styles.btn} onClick={handleOptionalButtonClick}>
          {props.optionalBtnText}
        </button>
      )}
      <p className={styles.text}>*required fields</p>
    </form>
  );
};

export default Form;
