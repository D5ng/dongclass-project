import Component from "../core/component.js";
import { validate } from "../utils/validate.js";
import { todoState } from "./todo-state.js";

export default class TodoInput extends Component {
  constructor() {
    super("#todo-input", "#app");
    this.inputElement = this.element.querySelector(".todo-input__title");

    this.configure("submit", this.submitHandler.bind(this));
  }

  clearInput() {
    this.inputElement.value = "";
  }

  submitHandler(event) {
    event.preventDefault();

    if (!validate({ value: this.inputElement.value })) {
      alert("공백 없이 입력해주세요!");
      this.clearInput();
      return;
    }
    todoState.addTodo(Date.now(), this.inputElement.value);

    this.clearInput();
  }
}