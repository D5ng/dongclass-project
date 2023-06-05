export function validate(validatable) {
  return validatable.value.trim().length !== 0 ? true : false;
}
