import { FC, useState, memo } from "react";

import InputType from "../../enums/input";
import { InputVariant } from "../../enums/variant";

import {
  Focus as FocusEvent,
  Change as ChangeEvent
} from "../../interfaces/event";

import validateEmail from "../../services/validations";

import Props from "./Input.interface";
import StyledInput from "./Input.styled";
// import EMPTY_FIELD from './Input.constants';

const Input: FC<Props> = ({
  id,
  value = "",
  error = "",
  label,
  required = false,
  type = InputType.TEXT,
  variant = InputVariant.OUTLINED,
  autoFocus = false,
  onBlur,
  onChange,
  validation
}) => {
  const [errorMessage, setErrorMessage] = useState(error);

  const validate = (event: FocusEvent | ChangeEvent) => {
    const {
      target: { value: eventValue }
    } = event;
    if (required && eventValue === "") {
      setErrorMessage("Campo vacio");
    } else if (validation && !validateEmail(value)) {
      setErrorMessage("Incorrect email input");
    } else if (errorMessage !== "") {
      setErrorMessage("");
    }
  };

  const onBlurValidation = (event: FocusEvent) => {
    validate(event);
    if (onBlur) {
      onBlur(event);
    }
  };
  const onChangeValidation = (event: ChangeEvent) => {
    validate(event);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledInput
      id={id}
      value={value}
      label={label}
      error={errorMessage !== ""}
      helperText={errorMessage}
      type={type}
      autoFocus={autoFocus}
      variant={variant}
      required={required}
      onBlur={onBlurValidation}
      onChange={onChangeValidation}
    />
  );
};

export default memo(
  Input,
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
