// get DarkMode button
const darkMode_button = document.querySelector(".fa-circle-half-stroke");

// navbar
const nav = document.querySelector("nav");
const logoSection = document.querySelector(".logo-section a");
const navLinks = document.querySelectorAll(".nav-links li a, .nav-links li i");
// main and body
const main = document.querySelector("main");
const body = document.body;

let toggle = false;
darkMode_button.addEventListener("click", function () {
  toggle = !toggle;

  console.log("clicked");

  if (toggle) {
    //navbar
    nav.style.backgroundColor = "#202020";
    logoSection.style.color = "white";
    logoSection.style.border = "1px solid white";
    for (link of navLinks) {
      link.style.color = "white";
    }
    //body and main
    main.style.backgroundColor = "#202020";
    main.style.color = "white";
    body.style.backgroundColor = "#202020";
  } else {
    //navbar
    nav.style.backgroundColor = "white";
    logoSection.style.color = "black";
    logoSection.style.border = "1px solid black";
    for (link of navLinks) {
      link.style.color = "black";
    }
    //body and main
    main.style.backgroundColor = "white";
    main.style.color = "black";
    body.style.backgroundColor = "white";
  }
});
