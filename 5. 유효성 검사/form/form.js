import debounce from "../utils/debounce.js";
import InputState from "./form-state.js";
import { inputRegExp } from "./form-regExp.js";
import { validate, passwordIsMatch } from "../utils/validate.js";
import { inputValidatorUI, isSubmitDisabled } from "./form-validate.js";

const form = document.querySelector("form");
const passwordInput = document.querySelector(".input-password");
const passwordConfirmInput = document.querySelector(".input-password__confirm");
const inputState = InputState();

const notInputPasswordConfirm = (className) => className !== "input-password__confirm";
const includePasswordAndPasswordConfirm = (className) =>
  className === "input-password__confirm" ||
  className === "input-password";

form.addEventListener(
  "input",
  debounce((event) => {
    const { target, target: { className, value }} = event;

    if (notInputPasswordConfirm(className)) {
      const isValid = validate(inputRegExp[className], value);
      inputState.setInputValidate(className, isValid);
      inputValidatorUI(target, isValid);
    }

    if (includePasswordAndPasswordConfirm(className)) {
      const isValid = passwordIsMatch(
        passwordInput.value,
        passwordConfirmInput.value
      );
      inputState.setInputValidate(passwordConfirmInput.className, isValid);
      inputValidatorUI(passwordConfirmInput, isValid);
    }

    isSubmitDisabled(inputState.inputValidate);
    console.log(inputState.inputValidate);
  }, 300)
);

// https://devjjsjjj.tistory.com/entry/Javascript-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
