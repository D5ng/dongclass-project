export function validate(input, regExp){
	const parentDiv = input.parentElement
	return regExp.test(input.value) 
		? validateSuccess(parentDiv)
		: validateError(parentDiv)
}

export function passwordIsMatch(password, passwordConfirm){
	const parentDiv = passwordConfirm.parentElement
	return password.value === passwordConfirm.value
		? validateSuccess(parentDiv)
		: validateError(parentDiv)
}

function validateSuccess(parentDiv){
	parentDiv.className = 'input-layout valid-success'
	return true;
}

function validateError(parentDiv){
	parentDiv.className = 'input-layout valid-error'
	return false;
}