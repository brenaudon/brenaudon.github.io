// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var scroll_menu = document.getElementById("myScrollMenu");
var scroll_menu_projets = document.getElementById("myScrollMenuProjets");
var haut = document.getElementById("vide");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if(scroll_menu != null){
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      scroll_menu.classList.add("sticky");
      haut.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      scroll_menu.classList.remove("sticky");
      haut.classList.remove("sticky");
    }
  }
  if(scroll_menu_projets != null){
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      scroll_menu_projets.classList.add("sticky");
      haut.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      scroll_menu_projets.classList.remove("sticky");
      haut.classList.remove("sticky");
    }
  }
  
} 