// jshint esversion : 6

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
      FOOTER.style.transitionDelay = "0.5s";
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
  FOOTER.style.opacity = '1';
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scroller-container").style.display = "block";
  } else {
    document.getElementById("scroller-container").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction();
};

// $(function(){
//   var onClass = "on";
//   var showClass = "show";
  
//   $("input").bind("checkval",function(){
//     var label = $(this).prev("label");
//     if(this.value !== ""){
//       label.addClass(showClass);
//     } else {
//       label.removeClass(showClass);
//     }
//   }).on("keyup",function(){
//     $(this).trigger("checkval");
//   }).on("focus",function(){
//     $(this).prev("label").addClass(onClass);
//   }).on("blur",function(){
//       $(this).prev("label").removeClass(onClass);
//   }).trigger("checkval");
// });


// // document.getElementById('name').addEventListener('click', getName);
// // document.getElementById('email').addEventListener('click', getName);


function test() {
  const name = document.getElementById("name").value;
  document.getElementById("formSuccess").innerHTML = `<p>Thanks <b>${name}</b>. The message has been sent successfully.</p>`;
}


document.getElementById("submit").addEventListener("submit",                       
  function (e){
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var params = {
      name: name,
      email: email,
      message: message
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/sendMessage', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {   
        // XMLHttpRequest.DONE == 4
        if (xhr.status == 200) {
          console.log(xhr.responseText);
        }
        else if (xhr.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    };

    xhr.onload = function(){
      console.log(this.responseText);
    };
  
    xhr.send(JSON.stringify(params));
    
  });