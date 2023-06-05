import Todo from './todo.js'

class TodoState {
  #todos;
  #listener;
  constructor() {
    this.instance;
    this.#listener = [];
    this.#todos = [];
  }

  get todos() {
    return [...this.#todos];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new TodoState();
    return this.instance;
  }

  addListener(listenerFn) {
    this.#listener.push(listenerFn);
  }

  addTodo(id, title) {
    this.#todos.push(new Todo(id, title));

    for (const listenerFn of this.#listener) {
      listenerFn([...this.#todos]);
    }
  }
}

export const todoState = TodoState.getInstance();