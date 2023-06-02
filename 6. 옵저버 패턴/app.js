class Youtube {
  #subscriber;
  constructor() {
    this.#subscriber = [];
  }

  get subscriber() {
    return this.#subscriber;
  }

  addSubscribe(subscriber) {
    this.#subscriber.push(subscriber);
  }

  unSubscribe(subscriber) {
    this.#subscriber = this.#subscriber.filter((sub) => sub !== subscriber);
  }

  notify() {
    this.#subscriber.forEach((subscriber) => subscriber.subscribe());
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  subscribe(){
    console.log(`${this.name}님이 구독했습니다.`);
  };
}

const youtube = new Youtube();
const person1 = new Subscriber('Dongs');
const person2 = new Subscriber("DongHyun");
const person3 = new Subscriber("D5ngHyun");

youtube.addSubscribe(person1)
youtube.addSubscribe(person2)
youtube.addSubscribe(person3)

youtube.unSubscribe(person1);


youtube.notify()

// console.log(youtube.listeners);