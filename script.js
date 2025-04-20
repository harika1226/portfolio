document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("sendBtn");
    const popup = document.getElementById("popup");
  
    btn.addEventListener("click", function () {
      popup.style.display = "block";
  
      // Optional: auto-hide the popup after 3 seconds
      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    });
  });
  
    // NAVBAR TOGGLE
    const menu = document.querySelector('.menu i');
    const navbar = document.querySelector('.header .navbar');

    if (menu && navbar) {
        menu.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

