// ---------- Selecting Elements ----------
// get DarkMode button
const darkMode_button = document.querySelector(".fa-circle-half-stroke");
// navbar
const nav = document.querySelector("nav");
const logoSection = document.querySelector(".logo-section a");
const navLinks = document.querySelectorAll(".nav-links li a, .nav-links li i");
// main and body
const main = document.querySelector("main");
const body = document.body;

// ----- setting Persistent Variable and toggle -----
localStorage.getItem("darkMode", false);
let toggle = false;

// Function to apply dark mode styles
function applyTheme() {
  // Retrieve the user's preference from localStorage

  toggle = localStorage.getItem("darkMode") === "true";

  // navbar
  nav.style.backgroundColor = toggle ? "#202020" : "white";
  logoSection.style.color = toggle ? "white" : "black";
  logoSection.style.border = toggle ? "1px solid white" : "1px solid black";
  for (link of navLinks) {
    link.style.color = toggle ? "white" : "black";
  }
  // body and main
  main.style.backgroundColor = toggle ? "#202020" : "white";
  main.style.color = toggle ? "white" : "black";
  body.style.backgroundColor = toggle ? "#202020" : "white";
}

// Apply dark mode styles when the page loads
applyTheme();

// Dark mode button click event
darkMode_button.addEventListener("click", function () {
  // Toggle the dark mode preference
  toggle = localStorage.getItem("darkMode") === "true";
  toggle = !toggle;

  // Save the updated preference to localStorage
  localStorage.setItem("darkMode", toggle);

  // Apply dark mode styles
  applyTheme();
});
