let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls or resizes the window, show/hide the button
window.addEventListener("scroll", scrollFunction);
window.addEventListener("resize", scrollFunction);

function scrollFunction() {
  // Get the #events section
  let eventsSection = document.getElementById("v-pills-tab");

  // Get the position of the #events section relative to the viewport
  let eventsSectionPosition = eventsSection.getBoundingClientRect().top;

  // Display the button if the #events section is in view
  if (eventsSectionPosition < window.innerHeight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.onload = function() {
  var element;
  var url = window.location.href;
  
  // Check if the URL contains an anchor
  if (url.includes("#")) {
    // Extract the anchor from the URL
    var anchor = url.substring(url.indexOf("#") + 1);
    // Find the corresponding element
    element = document.getElementById(anchor);
  } else {
    // If no anchor is specified, scroll to the default section
    element = document.getElementById("Home"); // Change "Home" to "home"
  }
  
  // Scroll to the element if found
  if (element) {
    element.scrollIntoView();
  }
};
