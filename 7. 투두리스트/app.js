// 각 템플릿 태그에 있는 HTML 태그를 화면에 그려주기.

class Todo {
  constructor() {
    this.templateElement = document.getElementById("todo-content");
    this.hostElement = document.getElementById("app");

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild;

    this.renderTemplate();
    this.toggle();
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}


class TodoInput {
  constructor() {
    this.templateElement = document.getElementById("todo-input");
    this.hostElement = document.getElementById("app");

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild;

    this.renderTemplate();
  }

  renderTemplate() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

new Todo();
new TodoInput();