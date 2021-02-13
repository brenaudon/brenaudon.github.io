// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction2()};

// Get the header
var menu = document.getElementById("myScrollMenu");

// Get the offset position of the navbar
var sticky2 = menu.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction2() {
  if (window.pageYOffset > sticky2) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
} 