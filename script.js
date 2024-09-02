var typed = new Typed(".multiple-text", {
    strings: ["Web developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
});
   // Dark mode toggle script
   const toggleButton = document.getElementById('dark-mode-toggle');
   const body = document.body;

   toggleButton.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
   });