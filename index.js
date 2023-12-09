const menuicon = document.querySelector(".menu-icon");
const logoicon = document.querySelector(".logo-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuicon.addEventListener("click", (event) => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
  console.log("clicked");
});

logoicon.addEventListener("click", (event) => {
  console.log("clicked");
});
