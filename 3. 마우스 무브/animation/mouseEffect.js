import MouseAnimation from "./mouseAnimation.js";
import MouseRender from "./mouseRender.js";

export default class MouseEffect {
	constructor(){
		this.coordinate = { x: 0, y: 0 }
		this.render = new MouseRender(document.querySelector('.mouse-zone'), 10)
		this.animation = new MouseAnimation()
		this.configure();
	}

	configure(){
		window.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
	}

	mouseMoveHandler(event){
		const { clientX, clientY } = event;
		const calcClientX = 1 - 2 * (clientX / innerWidth)
		const calcClientY = 1 - 2 * (clientY / innerHeight) 

		this.coordinate.x = calcClientX * 2
		this.coordinate.y = calcClientY * 4

		this.moveAnimation();
	}

	moveAnimation(){
		this.render.elems.forEach((elem, index) => this.animation.mousemove(elem, index, this.coordinate))
	}
}