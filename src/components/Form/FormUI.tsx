import React from "react";
import styles from "./Form.module.css";

interface FormUIProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  companyInput: string;
  handleInputChange: Function;
  setCompanyInput: Function;
  setCompanyError: Function;
  companyError: string;
  cityInput: string;
  setCityInput: Function;
  setCityError: Function;
  cityError: string;
  reqsInput: string;
  handleReqsInputChange: Function;
  setReqsInput: Function;
  setReqsError: Function;
  reqsError: string;
  linkInput: string;
  setLinkInput: Function;
  notesInput: string;
  setNotesInput: Function;
  isBtnActive: boolean;
  mainBtnText: string;
  optionalBtnText?: string;
  optionalBtnAction?: Function;
  handleOptionalButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FormUI: React.FC<FormUIProps> = (props) => {
  const {
    handleSubmit,
    companyInput,
    handleInputChange,
    setCompanyInput,
    setCompanyError,
    companyError,
    cityInput,
    setCityInput,
    setCityError,
    cityError,
    reqsInput,
    handleReqsInputChange,
    setReqsInput,
    setReqsError,
    reqsError,
    linkInput,
    setLinkInput,
    notesInput,
    setNotesInput,
    isBtnActive,
    mainBtnText,
    handleOptionalButtonClick,
  } = props;

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
        onChange={(event) => setLinkInput(event.target.value)}
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
        {mainBtnText}
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

export default FormUI;
