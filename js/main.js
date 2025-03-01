// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the menu toggle button and the navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    // Toggle the display of the nav links
    navLinks.style.display = (navLinks.style.display === 'flex' ? 'none' : 'flex');
    
    // Get the current state of the menu (aria-expanded)
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    
    // Toggle the aria-expanded attribute
    menuToggle.setAttribute('aria-expanded', !expanded);

    // Toggle the 'open' class on the navLinks (this will control visibility, if you want to use it for animation or styles)
    navLinks.classList.toggle('open');
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvp-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    form.style.display = "none";
    thankYouMessage.style.display = "block";
  });
});
