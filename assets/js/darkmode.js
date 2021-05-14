if (localStorage.getItem('theme') === 'dark') {
    toggleDarkMode()
}
function toggleDarkMode() {

    var toggleButton = document.querySelector(".navbar button");
    toggleButton.style.color = toggleButton.style.color === 'rgb(255, 255, 255)' ? '' : 'rgb(255, 255, 255)';
    console.log(toggleButton.style.color);

    var darkmodeBtn = document.querySelector("#darkmode-icon");
    var lightmodeBtn = document.querySelector("#lightmode-icon");

    darkmodeBtn.style.display = darkmodeBtn.style.display === "none" ? '' : "none";
    lightmodeBtn.style.display = lightmodeBtn.style.display === "none" ? '' : "none";

    var element = document.body;
    element.classList.toggle("dark-mode");

    var social_links = document.querySelectorAll(".contact-social-links i");
    social_links.forEach(social_link => {
        social_link.style.color = social_link.style.color === 'rgb(255, 255, 255)' ? '' : 'rgb(255, 255, 255)';
    });

    /* var cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.background = card.style.background === 'rgb(0, 0, 0)' ? '' : 'rgb(0, 0, 0)';
        card.style.borderColor = card.style.borderColor === 'rgb(255, 255, 255)' ? '' : 'rgb(255, 255, 255)';

    }); */

    var accordions = document.querySelectorAll(".accordion-button")
    accordions.forEach(accordion => {
      accordion.style.color = accordion.style.color === 'rgb(255, 255, 255)' ? '' : 'rgb(255, 255, 255)'
    })

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}