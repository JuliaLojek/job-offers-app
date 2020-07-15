import React, { useState, useEffect } from "react";
import { OfferModel } from "../../models/models";
import FormUI from "./FormUI";

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
  
  const [companyError, setCompanyError] = useState("");
  const [cityError, setCityError] = useState("");
  const [reqsError, setReqsError] = useState("");
  
  const [isBtnActive, setBtnActive] = useState(false);

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

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    inputCallback: (value: React.SetStateAction<string>) => void,
    errorCallback: (value: React.SetStateAction<string>) => void
  ) => {
    inputCallback(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value)) {
      errorCallback("Fill out this field. Don't use any special characters.");
    } else {
      errorCallback("");
    }
  };

  const handleReqsInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    inputCallback: (value: React.SetStateAction<string>) => void,
    errorCallback: (value: React.SetStateAction<string>) => void
  ) => {
    inputCallback(event.currentTarget.value);
    if (!validateInput(event.currentTarget.value, true)) {
      errorCallback(
        "Fill out this field. Use commas to separate requirements."
      );
    } else {
      errorCallback("");
    }
  };

  const clearInputs = () => {
    setCompanyInput("");
    setCityInput("");
    setReqsInput("");
    setLinkInput("");
    setNotesInput("");
    setBtnActive(false);
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
      setBtnActive(true);
    } else {
      setBtnActive(false);
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
        req: reqsInput
          .split(",")
          .map((req) => req.trim().toLowerCase())
          .filter((req) => req.length !== 0),
        link: linkInput.trim(),
        notes: notesInput.trim(),
      };
      props.mainBtnAction(newOffer);
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
    <FormUI
      handleSubmit={handleSubmit}
      companyInput={companyInput}
      handleInputChange={handleInputChange}
      setCompanyInput={setCompanyInput}
      setCompanyError={setCompanyError}
      companyError={companyError}
      cityInput={cityInput}
      setCityInput={setCityInput}
      setCityError={setCityError}
      cityError={cityError}
      reqsInput={reqsInput}
      handleReqsInputChange={handleReqsInputChange}
      setReqsInput={setReqsInput}
      setReqsError={setReqsError}
      reqsError={reqsError}
      linkInput={linkInput}
      setLinkInput={setLinkInput}
      notesInput={notesInput}
      setNotesInput={setNotesInput}
      isBtnActive={isBtnActive}
      mainBtnText={props.mainBtnText}
      optionalBtnText={props.optionalBtnText}
      optionalBtnAction={props.optionalBtnAction}
      handleOptionalButtonClick={handleOptionalButtonClick}
    />
  );
};

export default Form;
