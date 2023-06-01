import debounce from "../utils/debounce.js";
import InputState from "./form-state.js";
import {
  isValidate,
  isComparePassword,
  isSubmitDisabled,
} from "./form-validate.js";

const form = document.querySelector("form");
const passwordInput = document.querySelector(".input-password");
const passwordConfirmInput = document.querySelector(".input-password__confirm");

const inputState = InputState();

form.addEventListener(
  "input",
  debounce((event) => {
    const { target } = event;

    if (target.className !== "input-password__confirm"){
      isValidate(inputState, target)
    }

    if (
      target.className === "input-password__confirm" ||
      target.className === "input-password"
    ) {
      isComparePassword(
        inputState,
        passwordInput,
        passwordConfirmInput
      )
    }

    isSubmitDisabled(inputState.isInputValid);
    console.log(inputState.isInputValid);
  }, 300)
);

// https://devjjsjjj.tistory.com/entry/Javascript-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
