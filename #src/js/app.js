
"use strick"

let fixed = document.querySelector(".header");

let introH = document.querySelector(".intro").clientHeight;

let burger = document.querySelector(".burger");

let nav = document.querySelector(".nav");


window.addEventListener("scroll", function(){
  let scrollPos = window.scrollY;

  if ( scrollPos > introH ) {
    fixed.classList.add("fixed");
  } else {
    fixed.classList.remove("fixed");
  }
});

burger.addEventListener("click", function(){
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  let body = document.querySelector("body");

  body.classList.toggle("lock");
});


let navLink = document.querySelectorAll(".nav__link[data-goto]");

if (navLink.length > 0 ) {
  navLink.forEach(navLink => {
    navLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    let navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(".nav__link.dataset.goto")) {
      let gotoBlock = document.querySelector(".nav__link.dataset.goto");
      let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
