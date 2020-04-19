const MENU = document.getElementById('side-menu');
const MENU_OPENER = document.getElementById('sidemenuopener');
const MAIN = document.querySelector('main');
const FOOTER = document.querySelector('footer');
const BARS = document.getElementsByClassName("bar");

function menuToggle() {
  for (var i = 0; i < BARS.length; i++) {
    // BARS[i].classList.toggle("change");
    if(BARS[i].classList.contains("change")) {
      BARS[i].classList.remove("change");
      MENU_OPENER.style.right = '1.5rem';
      MENU.style.width = '0';
      MAIN.style.opacity = '1';
      FOOTER.style.opacity = '1';
    } else {
      BARS[i].classList.add("change");
      MENU_OPENER.style.right = 'calc(70vw + 0.5rem)';
      MENU.style.width = '70vw';
      MAIN.style.opacity = "0.4";
      MAIN.style.transitionDelay = "0.5s";
      FOOTER.style.opacity = "0.4";
      FOOTER.style.transitionDelay = "0.5s"
    }
  }
}

function clickBody() {
  for (var i = 0; i < BARS.length; i++) {
    BARS[i].classList.remove("change");
  }
  MENU_OPENER.style.right = '1.5rem';
  MENU.style.width = '0';
  MAIN.style.opacity = '1';
  FOOTER.style.opacity = '1'
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scroller-container").style.display = "block"
  } else {
    document.getElementById("scroller-container").style.display = "none"
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

window.onscroll = function() {
  scrollFunction()
};
