const nav__btn = document.querySelector(".nav__btn");
const nav__navigation = document.querySelector(".nav__navigation");

nav__btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav__navigation.classList.toggle("navigation-show");
}



const scrollLinks = document.querySelectorAll(".navigation__list");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        // prevent default
        e.preventDefault();
        nav__navigation.classList.remove("navigation-show");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});