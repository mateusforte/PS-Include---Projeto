const scrollButton1 = document.getElementById("scrollButton1");
const targetSection1 = document.getElementById("targetSection1");

const scrollButton2 = document.getElementById("scrollButton2");
const targetSection2 = document.getElementById("targetSection2");

const buttonUp = document.getElementById("button-up");
const targetUp = document.getElementById("targetUp");

scrollButton1.addEventListener("click", function() {
  const target = document.getElementById('targetSection1');
  smoothScrollTo(target);
});

scrollButton2.addEventListener("click", function() {
  const target = document.getElementById('targetSection2');
  smoothScrollTo(target);
});

buttonUp.addEventListener("click", function() {
  const target = document.getElementById('targetUp')
  smoothScrollTo(target);
})

function smoothScrollTo(target) {
  const startPosition = window.scrollY || window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  
  const duration = 250;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const scrollAmount = startPosition + (distance * progress);

    window.scrollTo(0, scrollAmount);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }

    window.scrollBy(0, -50);
  }

  requestAnimationFrame(animation);
}



window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
});