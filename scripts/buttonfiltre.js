import restaurants from './restaurant_card.js';

const prixBtn = document.querySelector('.prix-btn');
const distanceBtn = document.querySelector('.distance-btn');
const noteBtn = document.querySelector('.note-btn');

const container = document.querySelector('.container_card');

// copy de restoorants
const restaurantsFiltrePrix = [
    ...restaurants
];

const restaurantsFiltreDistance = [
    ...restaurants
]

const restaurantsFiltreNote = [
    ...restaurants
]


prixBtn.addEventListener('click', function () {

    container.innerHTML = '';
    // chopper que les resto avec categorie selectioné
    const restaurantsSelected = document.querySelector('.filtre.active');

    const categorie = restaurantsSelected.dataset.categorie;

    const restaurantsWithCategorySelectedArr = [];
    for (let i = 0; i < restaurantsFiltrePrix.length; i++) {
        const resto = restaurantsFiltrePrix[i];

        if (categorie === resto.description) {
            restaurantsWithCategorySelectedArr.push(resto)
        }
    }

    restaurantsWithCategorySelectedArr.sort((a, b) => {
        // if (a.prix.length < b.prix.length) {
        //     return -1;
        // } else if (a.prix.length > b.prix.length) {
        //     return 1
        // } else {
        //     return 0
        // }
        return a.prix.length - b.prix.length
    });

     restaurantsWithCategorySelectedArr.forEach(function (restaurant) {
        let card = document.createElement("li");
        card.classList.add("card");
        // card.dataset.categorie = categorie;

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
        let imageReputation = document.createElement("img");
        imageReputation.classList.add("img-card");
        imageReputation.src = restaurant.imageReputation.src;
        div.appendChild(imageReputation);
    
        //////////////////////////////////////

        let description = document.createElement("p");
        description.classList.add("A");
        description.textContent = "#" + restaurant.description;
        div.appendChild(description);

        container.appendChild(card);
    });

});

distanceBtn.addEventListener('click', function () {

    container.innerHTML = '';

    const restaurantsSelected =document.querySelector('.filtre.active');

    const categorie = restaurantsSelected.dataset.categorie;

    const restaurantsWithCategorySelectedArr = [];
    for (let i = 0; i < restaurantsFiltreDistance.length; i++) {
        const resto = restaurantsFiltreDistance[i];

        if (categorie === resto.description) {
            restaurantsWithCategorySelectedArr.push(resto)
        }
    }

    restaurantsWithCategorySelectedArr.sort((a, b) => {
        return a.distance.length - b.distance.length
    });

    restaurantsWithCategorySelectedArr.forEach(function (restaurant) {
        console.log("i am distance button");
        let card = document.createElement("li");
        card.classList.add("card");
        // card.dataset.categorie = categorie;

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
        let imageReputation = document.createElement("img");
        imageReputation.classList.add("img-card");
        imageReputation.src = restaurant.imageReputation.src;
        div.appendChild(imageReputation);
    
        //////////////////////////////////////

        let description = document.createElement("p");
        description.classList.add("A");
        description.textContent = "#" + restaurant.description;
        div.appendChild(description);

        container.appendChild(card);
    });
});
noteBtn.addEventListener('click', function () {

    container.innerHTML = '';

    const restaurantsSelected = document.querySelector('.filtre.active');
    
    const categorie = restaurantsSelected.dataset.categorie;

    const restaurantsWithCategorySelectedArr = [];
    for (let i = 0; i < restaurantsFiltreNote.length; i++) {
        const resto = restaurantsFiltreNote[i];

        if (categorie === resto.description) {
            restaurantsWithCategorySelectedArr.push(resto)
        }
    }

    restaurantsWithCategorySelectedArr.sort((a, b) => {
        return a.note - b.note
    });

    restaurantsWithCategorySelectedArr.forEach(function (restaurant) {
        console.log("i am note button");
        let card = document.createElement("li");
        card.classList.add("card");
        // card.dataset.categorie = categorie;

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
        let imageReputation = document.createElement("img");
        imageReputation.classList.add("img-card");
        imageReputation.src = restaurant.imageReputation.src;
        div.appendChild(imageReputation);
    
        //////////////////////////////////////

        let description = document.createElement("p");
        description.classList.add("A");
        description.textContent = "#" + restaurant.description;
        div.appendChild(description);

        container.appendChild(card);
    });

});

/*




noteBtn.addEventListener('click', function() {
    restaurantsFiltreNote.sort((a, b) => {
        return a.reputation.image.length - b.reputation.length
    });

    restaurantsFiltreNote.sort.forEach(function(restaurant) {
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
        prix.textContent =  restaurant.prix;
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
});
*/

