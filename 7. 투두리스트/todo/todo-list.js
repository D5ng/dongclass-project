import Component from "../core/component.js";
import TodoItem from "./todo-item.js";
import { todoState } from './todo-state.js'

export default class TodoList extends Component {
  constructor() {
    super("#todo-content", "#app");

    this.printTime();
    this.configure();

    todoState.addListener((todos) => {
      const ul = this.element.querySelector(".todo-body");
      this.printTasks(todos.length);
      ul.innerHTML = "";
      for (const todo of todos) {
        new TodoItem(todo);
      }
    });
  }

  configure() {
    this.hostElement.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler({ target }) {
    if (target.closest(".todo-modal")) {
      document.body.classList.toggle("active");
    }
  }

  insertAtNumberStart(date) {
    return date.toString().padStart(2, "0");
  }

  printTime() {
    const dateElement = this.element.querySelector(".todo-header__date");
    const date = new Date();
    const currentDate = `${date.getFullYear()}.${this.insertAtNumberStart(
      date.getMonth() + 1
    )}.${this.insertAtNumberStart(date.getDate())}`;

    dateElement.textContent = currentDate;
  }

  printTasks(todoLength){
    const tasksElement = this.element.querySelector('.todo-header__tasks');
    tasksElement.textContent = `${todoLength} Tasks`;
  }
}
