// déclaration du carousel et de ses bouton
const containerCarousel = document.querySelector(".slider_contener");
const carousel = document.querySelector("[data-target='carousel']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// detection des images
const carouselWidth = carousel.offsetWidth;
const card = carousel.querySelector("[data-target='card']");
const cardWidth = card.offsetWidth;
const cardMarginRight = Number(window.getComputedStyle(card).marginRight.match(/\d+/g)[0]);
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
let isNavigatingManually = false;

// calcule du déplacement
let offset = 0;
const maxX = -((cardCount - 1) * (cardWidth + cardMarginRight) - carouselWidth);




// Function qui fait défiler le carousel************************************************************
function scrollRight() {
    const cardWidth = carousel.querySelector("[data-target='card']").offsetWidth; // Width of a single card
    offset -= cardWidth; // Scroll by the width of one card
    if (Math.abs(offset) > (cardCount - 1) * cardWidth) {
        offset = 0; // Set offset to the first card position
    }
    carousel.style.transform = `translateX(${offset}px)`;
};




// écouteur de bouton*********************************************************************************
leftButton.addEventListener("click", function() {
    clearInterval(intervalId);
    isNavigatingManually = true;
    const cardWidth = carousel.querySelector("[data-target='card']").offsetWidth; // Width of a single card
    offset += cardWidth; // Scroll by the width of one card
    if (offset > 0) {
        offset = -(cardCount - 1) * cardWidth; // Set offset to the last card position
    }
    carousel.style.transform = `translateX(${offset}px)`;
    console.log('la marge est de : ', cardMarginRight);
});

rightButton.addEventListener("click", function() {
    clearInterval(intervalId);
    isNavigatingManually = true;
    const cardWidth = carousel.querySelector("[data-target='card']").offsetWidth; // Width of a single card
    offset -= cardWidth; // Scroll by the width of one card
    if (Math.abs(offset) > (cardCount - 1) * cardWidth) {
        offset = 0; // Set offset to the first card position
    }
    carousel.style.transform = `translateX(${offset}px)`;
});

let intervalId = setInterval(scrollRight, 3000);
console.log("au demarage intervalID vaut : ",intervalId);

// Redémarrer le défilement automatique lorsque la souris quitte le carousel****************************
carousel.addEventListener("mouseleave", () => {
    // Vérifier si l'utilisateur navigue actuellement manuellement
    if (!isNavigatingManually) {
        intervalId = setInterval(scrollRight, 3000);
        console.log("quand manuelle intervalID vaut : ",intervalId);
    }
});




// stop du défilement********************************************************************************
// Mettre à jour la variable isNavigatingManually lorsque l'utilisateur commence ou arrête de naviguer manuellement
containerCarousel.addEventListener("mouseenter", () => {
    isNavigatingManually = true;
    clearInterval(intervalId);

    console.log("ici le carousel ne défile plus");
});

containerCarousel.addEventListener("mouseleave", () => {
    isNavigatingManually = false;
    intervalId = setInterval(scrollRight, 3000);
    console.log("ici le carousel défile");
});
