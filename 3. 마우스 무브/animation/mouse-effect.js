export default class MouseEffect {
  constructor(render, animation) {
    this.elements = render.elements;
    this.mousemove = animation.mousemove;

    this.configure();
  }

  configure() {
    window.addEventListener("mousemove", this.mouseHandler.bind(this));
  }

  mouseHandler({ clientX, clientY }) {
    const calcClientX = (2 * (clientX / innerWidth) - 1) * 10;
    const calcClientY = (2 * (clientY / innerHeight) - 1) * 15;

    this.mousemove(this.elements, { calcClientX, calcClientY });
  }
}
