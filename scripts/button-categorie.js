import restaurants from './restaurant_card.js';

// Sélection du conteneur une seule fois en dehors de la fonction trierRestaurantsParCategorie
const container = document.querySelector('.container_card');

function trierRestaurantsParCategorie(categorie) {

    // Vider le conteneur avant d'ajouter de nouvelles cartes
    container.innerHTML = '';

    // Filtrer les restaurants en fonction de la catégorie
    const restaurantsFiltres = restaurants.filter(restaurant => restaurant.description === categorie);

    // Sélectionner les cartes qui ne correspondent pas à la catégorie sélectionnée
    const cartesNonFiltrees = document.querySelectorAll('.card:not([data-categorie="' + categorie + '"])');

    // Supprimer les cartes qui ne correspondent pas à la catégorie sélectionnée
    cartesNonFiltrees.forEach(function (carte) {
        carte.remove();
        console.log("Carte supprimée :", carte);
    });


    // Créer et afficher les cartes des restaurants sélectionnés
    restaurantsFiltres.forEach(function (restaurant) {
        let card = document.createElement("li");
        card.classList.add("card");
        card.dataset.categorie = categorie;

        let lienCard = document.createElement("a");
        lienCard.classList.add("lien-card");
        lienCard.href = restaurant.href;
        card.appendChild(lienCard);

        let img = document.createElement("img");
        img.classList.add("img-restaurant-card");
        img.alt = "Image du restaurant";
        img.src = restaurant.image.src;
        lienCard.appendChild(img);

        let div = document.createElement("div")
        div.classList.add("describe-card");
        lienCard.appendChild(div);

        let nom = document.createElement("h2");
        nom.classList.add("h2-carte");
        nom.textContent = restaurant.nom;
        div.appendChild(nom);

        let div2 = document.createElement("div")
        div2.classList.add("filter-card");
        div.appendChild(div2);

        let distance = document.createElement("p");
        distance.classList.add("distance");
        distance.textContent = restaurant.distance + " m";
        div2.appendChild(distance);

        let prix = document.createElement("p");
        prix.classList.add("price");
        prix.textContent = restaurant.prix;
        div2.appendChild(prix);

        // a modifier avec l'image des étoile
        let reputation = document.createElement("p");
        reputation.classList.add("img-card");
        reputation.textContent = restaurant.reputation;
        div.appendChild(reputation);
        //////////////////////////////////////

        let description = document.createElement("p");
        description.classList.add("A");
        description.textContent = "#" + restaurant.description;
        div.appendChild(description);

        container.appendChild(card);
    });
}


const filtres = document.querySelectorAll('.filtre');


// Ajouter un écouteur d'événements à chaque filtre
filtres.forEach((filtre) => {
    filtre.addEventListener('click', function (event) {
      
        if (event.target.classList.contains("active")) {
            event.target.classList.remove("active")
        } else {
            filtres.forEach(btnFiltre => btnFiltre.classList.remove("active"))
            event.target.classList.add("active")
        }
      
        const categorie = this.dataset.categorie;
        
        trierRestaurantsParCategorie(categorie);
        
        // Changer la couleur de fond du bouton cliqué
    });
});

// Ajouter un écouteur d'événements pour gérer la sélection des filtres
filtres.forEach((filtre) => {
    filtre.addEventListener('click', () => {
        // Supprimer la classe active de tous les boutons
        filtres.forEach(b => b.classList.remove('active'));
        console.log('ici je retire la class active');
        // Ajouter la classe active uniquement au bouton cliqué
        filtre.classList.add('active');
        console.log('ici je rajoute la class active');
    });
});

































// filtre.forEach(filtre => {
//     categorie.style.backgroundColor = '';
//     this.style.backgroundColor = 'var(--main-background-color)';
// });
// const filtres = document.querySelectorAll('.filtre');
// filtres.forEach(filtre => {
//     filtre.addEventListener('click', function() {
//         const categorie = this.dataset.categorie;
//         trierRestaurantsParCategorie(categorie);
//         filtres.forEach(filtre => {
//             filtre.style.backgroundColor = '';
//         });

//         // Changer la couleur de fond du bouton cliqué
//         this.style.backgroundColor = '#8d0008';
//     });
// });
