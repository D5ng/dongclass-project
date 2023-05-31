const form = document.querySelector('form');
const nameInput = document.querySelector('.input-name');
const idInput = document.querySelector('.input-id');
const passwordInput = document.querySelector('.input-password');
const passwordConfirmInput = document.querySelector('.input-password__confirm');

const regExpObject = {
	"input-name": /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/,
	"input-id": /^[a-z][a-z\d]{3,11}$/,
	"input-password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

const isValid = {
	name: false,
	id: false,
	password: false,
	passwordConfirm: false
}

function debounce(callback, seconds){
	let timerId;
	return function(event){
		if(timerId) clearTimeout(timerId);
		timerId = setTimeout(() => {
			callback(event)
		}, seconds)
	}
}

const success = (target) => target.className = 'input-layout valid-success'
const error = (target) => target.className = 'input-layout valid-error'

form.addEventListener('input', debounce((event) => {
	const { target } = event;

	if(target.className === 'input-name'){
		isValid.name = validate2(target, regExpObject[target.className])
	}

	if(target.className === 'input-id'){
		isValid.id = validate2(target, regExpObject[target.className])
	}

	if(target.className === 'input-password'){
		isValid.password = validate2(target, regExpObject[target.className])
	}

	if(target.className === "input-password__confirm" || target.className === "input-password"){
		isValid.passwordConfirm = passwordIsMatch(passwordInput, passwordConfirmInput)
	}

	for(const key in isValid){
		if(!isValid[key]){
			document.querySelector('.form-submit').setAttribute('disabled', 'true');		
			return
		}
	}

	document.querySelector('.form-submit').setAttribute('disabled', 'false');
}, 300))

function passwordIsMatch(password, passwordConfirm){
	const parentDiv = passwordConfirm.parentElement
	if(password.value === passwordConfirm.value){
		success(parentDiv)
		return true;
	} else {
		error(parentDiv)
		return false;
	}
}

function validate(input, regExp){
	const parentDiv = input.parentElement
	if(regExp.test(input.value)){
		success(parentDiv)
		return true;
	} else {
		error(parentDiv)
		return false;
	}
}

// nameInput.addEventListener('input', debounce(({ target }) => isInputValid[target.className] = validate(target, regExpObject[target.className]), 300))
// idInput.addEventListener('input', debounce(({ target }) => isInputValid[target.className] = validate(target, regExpObject[target.className]), 300))
// passwordInput.addEventListener('input', debounce(({ target }) => isInputValid[target.className] = validate(target, regExpObject[target.className]), 300))
// passwordConfirmInput.addEventListener('input', debounce(({ target }) => isInputValid[target.className] = validatePasswordConfirm(target), 300))


// https://devjjsjjj.tistory.com/entry/Javascript-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC