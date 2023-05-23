let prevTarget;

function clickHandler(e) {
  let target = e.target;

  if (target.nodeName !== "BUTTON") return;
  if (prevTarget) removeClass(prevTarget);

  target = searchLoop(target, "LI");

  addClass(target);
  prevTarget = target;
}

function addClass(target) {
  target.classList.add("active");
}

function removeClass(prevTarget) {
  prevTarget.classList.remove("active");
}

function searchLoop(target, tag) {
  while (target.nodeName !== tag) target = target.parentNode;
  return target;
}

const body = document.body;
body.addEventListener("click", clickHandler);
