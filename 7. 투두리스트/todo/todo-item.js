import Component from "../core/component.js";

export default class TodoItem extends Component {
  constructor(todoItem) {
    super("#todo-item", ".todo-body");
    this.todoItem = todoItem;
    this.element.id = todoItem.id

    this.renderContent();
    this.renderTemplate();
  }

  renderContent() {
    this.isCheckedClassName()
    this.element.querySelector('.todo-body__button').setAttribute('checked', this.todoItem.checked)
    this.element.querySelector(".todo-body__content").textContent =
      this.todoItem.title;
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  isCheckedClassName(){
    this.todoItem.checked
      ? this.element.classList.add("checked")
      : this.element.classList.remove("checked");
  }
}
