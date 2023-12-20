// Scroll to section
document.addEventListener('DOMContentLoaded', function () {
    
    var menuLinks = document.querySelectorAll('.header__menu a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            
            e.preventDefault();

            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);

            var offsetPosition = targetSection.offsetTop - 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// Burger Menu
const mobile_button = document.getElementById("burger__menu");
const header_container = document.querySelector(".header__container");

let isExpand = true;
let isPressed = true;

mobile_button.addEventListener("click", () => {

    if (isExpand) {
        header_container.style.height = "100vh";
    } else {
        header_container.style.height = "60px";
    }
    isExpand = !isExpand;
    isPressed = !isPressed;
});

// Закрытие шапки при нажатие на одну из кнопок в нав.меню
const logoBtn = document.getElementById("logo__btn");
const homeBtn = document.getElementById("homeBTN");
const projectsBtn = document.getElementById("projectsBTN");
const experienceBtn = document.getElementById("experienceBTN");


function closeMenu() {
    if (!isExpand) {
        header_container.style.height = "60px";
        isExpand = !isExpand;
    }
}

logoBtn.addEventListener("click", closeMenu);
homeBtn.addEventListener("click", closeMenu); 
projectsBtn.addEventListener("click", closeMenu);
experienceBtn.addEventListener("click", closeMenu);