export default class MouseAnimation {
	mousemove(elem, index, coordinate){
		elem.style.transform = 
			`translate3d(
				${-50 - coordinate.x * (index + 1)}%,
				${-50 - coordinate.y * (index + 1)}%,
				0)
			`
	}
}