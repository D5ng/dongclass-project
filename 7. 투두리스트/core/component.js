export default class Component {
  constructor(templateId, hostId) {
    this.templateElement = document.querySelector(templateId);
    this.hostElement = document.querySelector(hostId);

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild;

    this.renderTemplate();
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}
