import { addClass, removeClass } from '../utils/classList.js'

const tabButtonListElem = document.querySelector(".tab-btns");
const tabButtonItemElem = [...document.querySelectorAll(".tab-btns__item")];
const tabListItemElem = document.querySelectorAll(".tab-list__item");
const prevElement = {
  btnElem: document.querySelector(".tab-btns__item:nth-of-type(1)"),
  tabElem: document.querySelector(".tab-list__item:nth-of-type(1)"),
};

function clickHandler({ target }) {
  loopRemoveClass(prevElement, "active");
  prevElement.btnElem = searchElement(target);

  const tabIndex = tabButtonItemElem.findIndex((element) => element === prevElement.btnElem);
  prevElement.tabElem = tabListItemElem[tabIndex];

  loopAddClass(prevElement, "active")
}

const loopAddClass = (prevElement, className) => {
  for (const element in prevElement) 
    addClass(prevElement[element], className);
};

const loopRemoveClass = (prevElement, className) => {
  if (prevElement.btnElem && prevElement.tabElem)
    for (const element in prevElement)
      removeClass(prevElement[element], className);
};

// const isPrevElement = () => prevElement.btnElem && prevElement.tabElem;
const searchElement = (target) => {
  prevElement.btnElem = target;
  while (!prevElement.btnElem.classList.contains("tab-btns__item"))
    prevElement.btnElem = prevElement.btnElem.parentNode;

  return prevElement.btnElem;
};

tabButtonListElem.addEventListener("click", clickHandler);
