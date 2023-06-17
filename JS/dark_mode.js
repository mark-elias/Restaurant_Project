const darkMode_button = document.getElementById("dark-mode-button");

const navbar = document.getElementById("nav-bar");
const navbar_links = document.querySelectorAll("#nav-bar a");
const body = document.body;

const order_button = document.getElementById("order-button");

let toggle = false;

darkMode_button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  toggle = !toggle;

  if (toggle) {
    // code for when in DARK Mode

    //   go back to light mode
    darkMode_button.style.backgroundColor = "white";
    darkMode_button.style.color = "black";
    darkMode_button.textContent = "Light Mode";

    darkMode_button.style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 5px 15px";
    // order_button.style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 5px 15px";

    navbar.style.backgroundColor = "#333333";
    // code to change the navbar links, using a "for of" loop
    for (const element of navbar_links) {
      element.style.color = "white";
    }
    
    navbar.style.color = "white";
} else {
    // console.log("now in light mode");
    
    darkMode_button.style.backgroundColor = "#333333";
    darkMode_button.style.color = "white";
    darkMode_button.textContent = "Dark Mode";
    
    navbar.style.backgroundColor = "white";
    // code to change the navbar links, using a "for of" loop
    for (const element of navbar_links) {
      element.style.color = "black";
    }
}
});
