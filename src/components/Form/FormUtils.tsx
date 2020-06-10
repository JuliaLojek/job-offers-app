const errorMsg = "Fill out this field. Don't use any special characters.";

export const validateInput = (input: string, isCommaAccepted?: boolean) => {
  let isValid = true;
  isValid = isValid && input.trim().length > 0;
  if (isCommaAccepted) {
    isValid = isValid && !input.match(/[^a-zA-Z0-9, ]/g);
  } else {
    isValid = isValid && !input.match(/[^a-zA-Z0-9 ]/g);
  }
  return isValid;
};

export const handleInputChange = (
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

export const handleReqsInputChange = (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  inputCallback: (value: React.SetStateAction<string>) => void,
  errorCallback: (value: React.SetStateAction<string>) => void
) => {
  inputCallback(event.currentTarget.value);
  if (!validateInput(event.currentTarget.value, true)) {
    errorCallback("Fill out this field. Use commas to separate requirements.");
  } else {
    errorCallback("");
  }
};
