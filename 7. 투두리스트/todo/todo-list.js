import Component from "../core/component.js";
import TodoItem from "./todo-item.js";
import { todoState } from './todo-state.js'

export default class TodoList extends Component {
  constructor() {
    super("#todo-content", "#app");

    this.printTime();
    this.configure("click", this.clickHandler.bind(this));

    todoState.addListener((todos) => {
      const ul = this.element.querySelector(".todo-body");
      this.printAllTasks(todos);
      this.printDoneTasks(todos);

      ul.innerHTML = "";
      for (const todo of todos) {
        new TodoItem(todo);
      }
    });
  }

  clickHandler({ target }) {
    if (target.closest(".todo-modal")) {
      document.body.classList.toggle("active");
    }

    if (target.closest(".todo-body__delete")) {
      const id = +target.closest(".todo-body__list").id;
      todoState.deleteTodo(id);
      return;
    }

    if(target.closest(".todo-body__list")){
      const id = +target.closest(".todo-body__list").id;
      todoState.checkedTodo(id);
      return;
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

  printAllTasks(todos){
    const allTasksElement = this.element.querySelector(".todo-header__tasks-all span");
    allTasksElement.textContent = `${todos.length} Tasks`;
  }

  printDoneTasks(todos){
    const doneTasksElement = this.element.querySelector(".todo-header__tasks-done span");
    doneTasksElement.textContent = `${todos.filter((todo) => todo.checked).length} Tasks`;
  }
}
