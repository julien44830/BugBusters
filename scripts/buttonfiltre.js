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

    restaurantsFiltrePrix.sort((a, b) => {
        // if (a.prix.length < b.prix.length) {
        //     return -1;
        // } else if (a.prix.length > b.prix.length) {
        //     return 1
        // } else {
        //     return 0
        // }
        return a.prix.length - b.prix.length
    });
    // chopper une categorie
    const restaurantsSelectedArray = document.querySelectorAll('.filtre.selected');

    const categoriesArray = [];
    for (let i = 0; i < restaurantsSelectedArray.length; i++) {
        const resto = restaurantsSelectedArray[i];
        categoriesArray.push(resto.dataset.categorie)
    }

    const restaurantsFiltrePrixSelectedArray = []
    for (let i = 0; i < restaurantsFiltrePrix.length; i++) {
        const resto = restaurantsFiltrePrix[i];

        // if" pizza" se trouve dans  categoriesArray
        if (categoriesArray.includes(resto.description)) {
            restaurantsFiltrePrixSelectedArray.push(resto)
        }
    }

    restaurantsFiltrePrixSelectedArray.forEach(function (restaurant) {
        console.log("toto");
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

// distanceBtn.addEventListener('click', function() {

//     container.innerHTML ='';

//     restaurantsFiltreDistance.sort((a, b) => {
//         return a.distance.length - b.distance.length
//     })
//     const restaurantsSelectedArray = document.querySelectorAll('.filtre.selected');

//     const = categoriesArray =[]
//     for (let i = ; i <)
// })

/*
1__________________________________  vide tout les éléments from container
 __________________________________2-filtre les restaurants. copier les restaurants importés et filtrer 
 _________________________________const restaurantsFiltrePrix = restaurants.sort((a, b) => a.prix < b.prix );
 _________________________________ses copies (filtre par le prix)
 __3- crée les élements à la base de copie de restaurants
 4- ajoute de nouveaux élément dans HTML*/



/*
distanceBtn.addEventListener('click', function () {
    restaurantsFiltreDistance.sort((a, b) => {
        return a.distance.length - b.distance.length
    
    });
    console.log(restaurantsFiltreDistance.sort);

    function trierRestaurantsParCategorie(categorie) {

    restaurantsFiltreDistance.forEach(function(restaurant) {
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

};



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

