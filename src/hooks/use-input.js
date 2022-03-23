import { useState } from "react";

const useInput = (inputValidation) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = inputValidation(inputValue);
  const hasError = !isValid && isTouched;

  const inputChageHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid,
    hasError,
    inputChageHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
