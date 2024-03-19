import restaurants from './restaurant_card.js';

// Fonction pour trier les boutons de filtrage par catégorie
function trierBoutonsParCategorie(categorie) {
    // Récupérer tous les boutons de filtrage
    const filtres = document.querySelectorAll('.filtre');

    // Parcourir tous les boutons de filtrage
    filtres.forEach(function(filtre) {
        // Vérifier si le bouton de filtrage correspond à la catégorie spécifiée
        // ici code pour filtréer les categorie de restaurant
        if (filtre.dataset.categorie === categorie || categorie === 'tous') {
            filtre.parentNode.style.display = 'inline-block'; // Afficher le bouton de filtrage
        } else {
// ici code pour filtréer les categorie de restaurant


            filtre.style.backgroundColor = 'grey'; // Masquer le bouton de filtrage
        }
    });
}

// Ajouter des écouteurs d'événements aux boutons de filtrage pour déclencher le tri
const filtres = document.querySelectorAll('.filtre');
filtres.forEach(function(filtre) {
    filtre.addEventListener('click', function() {
        const categorie = this.dataset.categorie; // Récupérer la catégorie associée au bouton de filtrage
        trierBoutonsParCategorie(categorie);
        console.log("categorie : ",categorie) // Trier les boutons en fonction de la catégorie
    });
});

// // Ajouter un écouteur d'événements au bouton "Tous" pour afficher tous les boutons
// const boutonTous = document.querySelectorAll(".filtreplus");
// boutonTous.addEventListener('click', function() {
//     trierBoutonsParCategorie('tous'); // Afficher tous les boutons
// });
