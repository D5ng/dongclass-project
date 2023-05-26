
function scrollHandler(){
  progress(scrollY);
}

function progress(yOffset){
  const progressBarElem = document.querySelector(".progress-bar");
  const calcHeight = document.body.clientHeight - innerHeight;
  const scrollRatio = (yOffset / calcHeight) * 100;

  progressBarElem.style.width = `${scrollRatio}%`;
}


window.addEventListener('scroll', scrollHandler)