import { inputRegExp } from "./form-regExp.js";
import { validateSuccess, validateError } from '../UI/validate.js'

// 정규식 유효성 체크
export function isValidate(inputState, target) {
  const result = {
    props: target.className,
    value: inputRegExp[target.className].test(target.value),
  };
  inputState.isInputValid = result
  return result 
    ? validateSuccess(target) 
    : validateError(target);
}

// 패스워드 비교 체크
export function isComparePassword(inputState, passwordInput, passwordConfirmInput) {
  const result = {
    props: passwordConfirmInput.className,
    value: passwordInput.value === passwordConfirmInput.value,
  };
  inputState.isInputValid = result
  return result.value
    ? validateSuccess(passwordConfirmInput)
    : validateError(passwordConfirmInput);
}

// 버튼 사용 불가능한지 체크
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