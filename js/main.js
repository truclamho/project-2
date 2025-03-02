document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = (navLinks.style.display === 'flex' ? 'none' : 'flex');
    
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    
    menuToggle.setAttribute('aria-expanded', !expanded);

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
