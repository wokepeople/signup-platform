import { createSignal } from "solid-js";
import { ChangeEventHandler, FocusEventHandler } from "@suid/types";

const isValid = (label: string, value: string) => {
  const error = validate(label, value);

  if (typeof error === "boolean") {
    return true;
  }
  return false;
};

const getHelperText = (label: string, value: string) => {
  const error = validate(label, value);

  if (typeof error === "boolean") {
    return null;
  }
  return error;
};

const validate = (label: string, value: string) => {
  switch (label) {
    case "firstName":
    case "lastName":
      return value.length >= 2 || "este campo é obrigatório";
    case "email":
      return validateEmail(value) || "insira um e-mail válido";
    case "password":
      return value.length >= 6 || "o tamanho mínimo é de 6 caracteres";
    default:
      return value.length > 0 || "este campo é obrigatório";
  }
};

const validateEmail = (email: string) => {
  return (
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
  );
};

export const inputModel = (name: string) => {
  const [getValue, setValue] = createSignal("");
  const [getTouched, setTouched] = createSignal(false);

  const error = () => getTouched() && !isValid(name, getValue());
  const helperText = () => getTouched() && getHelperText(name, getValue());
  const onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement,
    string
  > = (event) => {
    setValue(event.target.value);
  };
  const onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    event
  ) => {
    setTouched(true);
  };

  const value = () => getValue();
  const valid = () => isValid(name, getValue())

  return {
    _inputFunctions: {
      onChange,
      onBlur,
    },
    _inputProps: {
      error,
      helperText,
      value,
    },
    getValue,
    setValue,
    valid,
  };
};
