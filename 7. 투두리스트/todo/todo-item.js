import Component from "../core/component.js";

export default class TodoItem extends Component {
  constructor(todoItem) {
    super("#todo-item", ".todo-body");
    this.todoItem = todoItem;

    this.renderContent();
    this.renderTemplate();
  }

  renderContent() {
    this.element.querySelector(".todo-body__content").textContent =
      this.todoItem.title;
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}
