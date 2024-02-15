
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var links = navbar.getElementsByTagName("a");
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "white";
    navbar.style.transition = "background-color 0.4s";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black"; // Change text color to black
    }
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    navbar.style.backgroundColor = "#715FDB";
    navbar.style.transition = "background-color 0.4s";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "white"; // Change text color to white
    }
    document.getElementById("logo").style.fontSize = "35px";
  }
}
