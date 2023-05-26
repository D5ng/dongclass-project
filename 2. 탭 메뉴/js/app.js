const tabElem = document.querySelector(".tab");

const targetInfo = {
  btnElem: null,
  tabElem: null,
};

function clickHandler(event) {
  if (event.target.nodeName !== "BUTTON") return;
  if(targetInfo.btnElem && targetInfo.tabElem) {
    inactiveClass(targetInfo.btnElem);
    inactiveClass(targetInfo.tabElem);
  }

  targetInfo.btnElem = searchElem(event.target);
  targetInfo.tabElem = document.querySelector(`#${targetInfo.btnElem.dataset.tab}`);

  activeClass(targetInfo.tabElem);
  activeClass(targetInfo.btnElem)
}

const searchElem = (target) => {
  while (!target.classList.contains("tab-btns__item")) {
    target = target.parentNode;
  }

  return target
}
const activeClass = (target) => target.classList.add("active");
const inactiveClass = (target) => target.classList.remove("active");


tabElem.addEventListener("click", clickHandler);
