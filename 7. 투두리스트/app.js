class Todo {
  constructor(id, title){
    this.id = id
    this.title = title
  }
}

class TodoState {
  #todos
  #listener
  constructor() {
    this.instance;
    this.#listener = []
    this.#todos = [];
  }

  get todos(){
    return [...this.#todos]
  }

  static getInstance() {
    if(this.instance){
      return this.instance
    }

    this.instance = new TodoState()
    return this.instance
  }

  addListener(listenerFn){
    this.#listener.push(listenerFn);
  }

  addTodo(id, title) {
    this.#todos.push(new Todo(id, title));

    for(const listenerFn of this.#listener){
      listenerFn([...this.#todos])
    }
  }
}

const todoState = TodoState.getInstance();


class TodoItem {
  constructor(todoItem) {
    this.templateElement = document.getElementById("todo-item");
    this.hostElement = document.querySelector(".todo-body");

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild;

    this.todoItem = todoItem;

    this.renderContent();
    this.renderTemplate();
  }

  renderContent(){
    this.element.querySelector('.todo-body__content').textContent = this.todoItem.title
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

class Component {
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

class TodoList extends Component {
  constructor() {
    super("#todo-content", "#app");

    this.printTime();
    this.configure();

    todoState.addListener((todos) => {
      const ul = this.element.querySelector('.todo-body')
      ul.innerHTML = ''
      for(const todo of todos){
        new TodoItem(todo);
      }
    })
  }

  configure() {
    this.hostElement.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler({ target }) {
    if(target.closest(".todo-modal")){
      document.body.classList.toggle('active')
    }
  }

  insertAtNumberStart(date){
    return date.toString().padStart(2, '0')
  }

  printTime(){
    const dateElement = this.element.querySelector(".todo-header__date");
    const date = new Date();
    const currentDate = `${date.getFullYear()}.${this.insertAtNumberStart(date.getMonth() + 1)}.${this.insertAtNumberStart(date.getDate())}`

    console.log(this.element);

    dateElement.textContent = currentDate
  }
}


class TodoInput extends Component {
  constructor() {
    super("#todo-input", "#app");
    this.inputElement = this.element.querySelector(".todo-input__title");

    this.configure();
  }

  configure() {
    this.hostElement.addEventListener("submit", this.submitHandler.bind(this));
  }

  clearInput() {
    this.inputElement.value = ''
  }

  submitHandler(event) {
    event.preventDefault();

    if(!validate({ value: this.inputElement.value })){
      alert('공백 없이 입력해주세요!')
      this.clearInput();
      return  
    }
    todoState.addTodo(Date.now(), this.inputElement.value);

    this.clearInput();
  }
}

function validate(validatable){
  return validatable.value.trim().length !== 0 
    ? true
    : false
}


new TodoList();
new TodoInput();
