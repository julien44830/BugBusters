let restaurant1 = {
    nom: "Nom du restaurant1",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant2 = {
    nom: "Nom du restaurant2",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 180,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant3 = {
    nom: "Nom du restaurant3",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant4 = {
    nom: "Nom du restaurant4",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant5 = {
    nom: "Nom du restaurant5",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant6 = {
    nom: "Nom du restaurant6",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant7 = {
    nom: "Nom du restaurant7",
    description: "#fuit de mère",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant8 = {
    nom: "Nom du restaurant8",
    description: "#végane",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant9 = {
    nom: "Nom du restaurant9",
    description: "#végane",
    prix: "€€€",
    distance: 305,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant10 = {
    nom: "Nom du restaurant10",
    description: "#végane",
    prix: "€€€",
    distance: 305 ,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

let restaurant11 = {
    nom: "casse croute",
    description: "#viande",
    prix: "€€€€€",
    distance: 1005,
    adresseMap: "Adresse sur la carte",
    image: "URL de l'image du restaurant"
};

// Création d'un tableau pour stocker les objets de restaurant
let restaurants = [
    restaurant1,
    restaurant2,
    restaurant3,
    restaurant4,
    restaurant5,
    restaurant6,
    restaurant7,
    restaurant8,
    restaurant9,
    restaurant10,
    restaurant11
];

console.log(restaurants);


// Données des restaurants (remplacez ces données par les vôtres)


// Fonction pour créer et injecter les cartes des restaurants dans le HTML

    let container = document.querySelector('.container_card');
    console.log(container);

    restaurants.forEach(function(restaurant) {
        let card = document.createElement("li");
        card.classList.add("card");


        let img = document.createElement("img");
        card.classList.add("restaurant-card");
        img.alt = "Image du restaurant";
        card.appendChild(img);


        let nom = document.createElement("h2");
        card.classList.add("h2-carte");
        nom.textContent = restaurant.nom;
        card.appendChild(nom);


        let description = document.createElement("p");
        card.classList.add("A");
        description.textContent = restaurant.description;
        card.appendChild(description);


        let prix = document.createElement("p");
        card.classList.add("price");
        prix.textContent =  restaurant.prix;
        card.appendChild(prix);


        let distance = document.createElement("p");
        card.classList.add("distance");
        distance.textContent = restaurant.distance + " m";
        card.appendChild(distance);


        let adresse = document.createElement("img");
        card.classList.add("img-card");
        adresse.textContent = restaurant.adresseMap;

        card.appendChild(adresse);

        container.appendChild(card);
    });



