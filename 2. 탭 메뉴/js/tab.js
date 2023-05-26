const tabElem = document.querySelector('.tab');

const targetInfo = {
  target: null,
  tab: null
};

function clickHandler(event){
  if(event.target.nodeName !== 'BUTTON') return;

  targetInfo.target = event.target;


  while(!targetInfo.target.classList.contains('tab-btns__item')){
    targetInfo.target = targetInfo.target.parentNode
  }

  console.log(targetInfo)
}


tabElem.addEventListener('click', clickHandler);