import { validateSuccess, validateError } from "../UI/validate.js";

export function inputValidatorUI(target, isValid) {
  isValid ? validateSuccess(target) : validateError(target);
}

export function isSubmitDisabled(inputValidaObject) {
  for (const key in inputValidaObject) {
    if (!inputValidaObject[key]) {
      document.querySelector(".form-submit").setAttribute("disabled", "true");
      return;
    } else {
      document.querySelector(".form-submit").setAttribute("disabled", "false");
    }
  }
}
