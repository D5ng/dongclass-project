export function validateSuccess(target) {
  return target.parentElement.className = "input-layout valid-success";
}

export function validateError(target) {
  return target.parentElement.className = "input-layout valid-error";
}
