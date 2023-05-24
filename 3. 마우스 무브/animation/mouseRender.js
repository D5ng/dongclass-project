export default class MouseRender {
	#elems

	constructor(rootElem, count){
		this.rootElem = rootElem
		this.count = count
		this.#elems = []
		this.createElem()	
	}

	get elems(){
		return this.#elems
	}

	createElem(){
		for(let i = 0; i < this.count; i++){
			const div = document.createElement('div')
			div.classList.add('mouse-effect');
			div.textContent = '마우스 무브'
			
			this.elems.push(div);
			this.rootElem.insertAdjacentElement('beforeend', div);
		}
	}
}