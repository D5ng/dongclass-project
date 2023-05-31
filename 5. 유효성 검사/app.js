import debounce from "./utils/debounce.js";
import { regExpObject } from './utils/regExp.js';
import { validate, passwordIsMatch } from './utils/validate.js';

const form = document.querySelector('form');
const passwordInput = document.querySelector('.input-password');
const passwordConfirmInput = document.querySelector('.input-password__confirm');

const isValid = {
	name: false,
	id: false,
	password: false,
	passwordConfirm: false
}

form.addEventListener('input', debounce((event) => {
	const { target } = event;

	if(target.className === 'input-name'){
		isValid.name = validate(target, regExpObject[target.className])
	}

	if(target.className === 'input-id'){
		isValid.id = validate(target, regExpObject[target.className])
	}

	if(target.className === 'input-password'){
		isValid.password = validate(target, regExpObject[target.className])
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






// https://devjjsjjj.tistory.com/entry/Javascript-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC