import { useState } from "react";
const useInputValidations = (isValid) => {
  const [value, setValue] = useState("");
  const [isValueTouched, setIsValueTouched] = useState(false);
  // const[]
  const isValueValid = isValid(value);
  const error = isValueTouched && !isValueValid;

  const onChangeHandler = (event) => {
    setIsValueTouched(true);
    setValue(event.target.value);
  };
  const onblurHandler = () => {
    setIsValueTouched(true);
  };

  return {
    value,
    isValueTouched,
    isValueValid,
    onChangeHandler,
    onblurHandler,
    error
  };
};

export default useInputValidations;
