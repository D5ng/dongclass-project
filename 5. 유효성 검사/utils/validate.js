export function validate(regExp, value) {
  return regExp.test(value);
}

export function passwordIsMatch(password, passwordConfirm) {
  return password === passwordConfirm;
}
