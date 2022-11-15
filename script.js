let hamburgerButton = document.getElementById("hamburger-button");
let navMenu = document.getElementsByClassName("nav-item-container");

hamburgerButton.addEventListener("click" , () => {
  if(navMenu[0].style.display === "flex") {
    navMenu[0].style.display= "none";
  } else {
    navMenu[0].style.display= "flex"
  }
});