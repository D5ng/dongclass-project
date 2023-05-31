const form = document.querySelector('form');



// /([^가-힣\x20])/i

const nameInput = document.querySelector('.input-name');
const idInput = document.querySelector('.input-id');
const passwordInput = document.querySelector('.input-password');
const passwordConfirmInput = document.querySelector('.input-password__confirm');

const regExpObject = {
	"input-name": /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/,
	"input-id": /^[a-z][a-z\d]{3,11}$/,
	"input-password": /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
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



function validate(callback, target, regExp){
	return callback(target, regExp)
}

function validateDefault(target, regExp){
	const parentDiv = target.parentNode;
	if(regExp.test(target.value)){
		parentDiv.classList.remove('valid-error')
		parentDiv.classList.add('valid-success')
		return true;
	} else {
		parentDiv.classList.remove('valid-success')
		parentDiv.classList.add('valid-error')
		return false;
	}
}


function validatePasswordConfirm(target){
	const parentDiv = target.parentNode;
	if(passwordInput.value === target.value){
		parentDiv.classList.remove('valid-error')
		parentDiv.classList.add('valid-success')
		return true;
	} else {
		parentDiv.classList.remove('valid-success')
		parentDiv.classList.add('valid-error')
		return false;
	}
}

function isDisable(target){
	// 
}


form.addEventListener('input', debounce((event) => {
	const { target } = event;

	let result = true;

	for(const key in regExpObject){
		if(target.className !== key) continue 
		result = result && validate(validateDefault, target, regExpObject[key])
	}

	if(target.className === 'input-password__confirm') {
		result = result && validate(validatePasswordConfirm, target)
	}

	if(result){
		document.querySelector('.form-submit').removeAttribute("disabled");
	}

	console.log(result);


	// if(document.querySelector())

	// switch(target.className){
	// 	case "input-name": 
	// 		validate(target, regExpObject.name);
	// 		break;

	// 	case "input-id": 
	// 		validate(target, regExpObject.id);
	// 		break;

	// 	case "input-password": 
	// 		validate(target, regExpObject.password)
	// 		break;

	// 	case "input-password__confirm": 
	// 		validatePasswordConfirm(target)
	// 		break;
	// }
}, 300))



// idInput.addEventListener('input', ({ currentTarget, target: { value }}) => {
// 	if(regExpObject.id.test(value)){
// 		currentTarget.parentNode.classList.remove('valid-error')
// 		currentTarget.parentNode.classList.add('valid-success')
// 	} else {
// 		currentTarget.parentNode.classList.remove('valid-success')
// 		currentTarget.parentNode.classList.add('valid-error')
// 	}
// })

// passwordInput.addEventListener('input', ({ currentTarget, target: { value }}) => {
// 	if(regExpObject.password.test(value)){
// 		currentTarget.parentNode.classList.remove('valid-error')
// 		currentTarget.parentNode.classList.add('valid-success')
// 	} else {
// 		currentTarget.parentNode.classList.remove('valid-success')
// 		currentTarget.parentNode.classList.add('valid-error')
// 	}
// })

// passwordConfirmInput.addEventListener('input', ({ currentTarget, target: { value }}) => {
// 	if(passwordInput.value === value){
// 		currentTarget.parentNode.classList.remove('valid-error')
// 		currentTarget.parentNode.classList.add('valid-success')
// 	} else {
// 		currentTarget.parentNode.classList.remove('valid-success')
// 		currentTarget.parentNode.classList.add('valid-error')
// 	}
// })



// https://devjjsjjj.tistory.com/entry/Javascript-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC