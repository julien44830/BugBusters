console.log('coucou');

// Sélectionnez le conteneur du carousel et ses boutons de navigation
const containerCarousel = document.querySelector(".slider_contener");
const carousel = document.querySelector("[data-target='carousel']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Détection des cartes du carousel
const card = carousel.querySelector("[data-target='card']");
const cardWidth = card.offsetWidth;
const cardMarginRight = Number(window.getComputedStyle(card).marginRight.match(/\d+/g)[0]);
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Initialisation de l'état du défilement manuel
let isNavigatingManually = false;

// Calcul de la limite maximale de défilement
let offset = 0;
const maxX = -((cardCount - 1) * (cardWidth + cardMarginRight) - carousel.offsetWidth);







// Fonction de défilement automatique*******************************************************************************
function scrollRightLoop() {
    if (!isNavigatingManually) {
        offset -= cardWidth; // Défiler d'une carte vers la droite
        if (Math.abs(offset) > (cardCount - 3) * cardWidth) {
            offset = 0; // Retourner au début si le défilement dépasse la limite
        }
        carousel.style.transform = `translateX(${offset}px)`;
    }
}

// Démarrer le défilement automatique toutes les 3 secondes
let intervalId = setInterval(scrollRightLoop, 2500);

// Arrêter le défilement automatique lorsque la souris entre dans le carousel
containerCarousel.addEventListener("mouseenter", () => {
    isNavigatingManually = true;
    clearInterval(intervalId);
});

// Redémarrer le défilement automatique lorsque la souris quitte le carousel
containerCarousel.addEventListener("mouseleave", () => {
    isNavigatingManually = false;
    intervalId = setInterval(scrollRightLoop, 3000);
});






// Écouter les clics sur le bouton de navigation gauche*****************************************************************
leftButton.addEventListener("click", () => {
    clearInterval(intervalId);
    isNavigatingManually = true;
    offset += cardWidth; // Défiler d'une carte vers la gauche
    if (offset > 0) {
        offset = -(cardCount - 1) * cardWidth; // Retourner à la fin si on dépasse le début
    }
    carousel.style.transform = `translateX(${offset}px)`;
});

// Écouter les clics sur le bouton de navigation droite
rightButton.addEventListener("click", () => {
    clearInterval(intervalId);
    isNavigatingManually = true;
    offset -= cardWidth; // Défiler d'une carte vers la droite
    if (Math.abs(offset) > (cardCount - 1) * cardWidth) {
        offset = 0; // Retourner au début si on dépasse la fin
    }
    carousel.style.transform = `translateX(${offset}px)`;
});
