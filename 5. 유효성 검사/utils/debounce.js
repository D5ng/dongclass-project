export default function debounce(callback, seconds){
	let timerId;
	return function(event){
		if(timerId) clearTimeout(timerId);
		timerId = setTimeout(() => {
			callback(event)
		}, seconds)
	}
}