export default class MouseRender {
  constructor(rootElem, count) {
    this.count = count;
    this.rootElem = rootElem ?? document.querySelector(".move-zone");
    this.elements = this.createElem();

    this.render();
  }

  createElem() {
    const elements = [];
    for (let i = 0; i < this.count; i++) {
      const div = document.createElement("div");
      div.classList.add("move-elem");
      div.textContent = "Cocacola";

      elements.push(div);
    }

    return elements;
  }

  render() {
    this.elements.forEach((div) =>
      this.rootElem.insertAdjacentElement("beforeend", div)
    );
  }
}