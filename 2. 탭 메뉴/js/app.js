const tabElem = document.querySelector(".tab");

const targetInfo = {
  btnElem: document.querySelector(".tab-btns__item:nth-of-type(1)"),
  tabElem: document.querySelector(".tab-list__item:nth-of-type(1)"),
};


function clickHandler(event) {
  if (event.target.nodeName !== "BUTTON") return;
  if (isPrevElement()) {
    for (const key in targetInfo) inactiveClass(targetInfo[key]);
  }

  targetInfo.btnElem = searchElem(event.target);
  targetInfo.tabElem = document.querySelector(`#${targetInfo.btnElem.dataset.tab}`);

  for (const key in targetInfo) activeClass(targetInfo[key]);
}

const isPrevElement = () => targetInfo.btnElem && targetInfo.tabElem
const searchElem = (target) => {
  while (!target.classList.contains("tab-btns__item"))
    target = target.parentNode;
  return target
}
const activeClass = (target) => target.classList.add("active");
const inactiveClass = (target) => target.classList.remove("active");


tabElem.addEventListener("click", clickHandler);
