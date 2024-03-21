let restaurants = [

    {
        nom: "Pazzi",
        description: "Pizza",
        prix: "€€€",
        distance: 600,
        href: "./restaurant_pazzi.html",
        reputation: 4,
        image: {
            src: "./assets/restaurants/pazzi.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/PYhh4vrEuYpP9bi89"
    },

    {
        nom: "Omija",
        description: "Sushi",
        prix: "€€€",
        distance: 170,
        href: "./restaurant_omija.html",
        reputation: 5,
        image: {
            src: "./assets/restaurants/omija.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/uJZ71K1CRviBLsJP8"
    },

    {
        nom: "Ichi Go Ichi E Ramen",
        description: "Ramen",
        prix: "€€€",
        distance: 70,
        href: "./restaurant_ichi_go_ramen.html",
        reputation: 5,
        image: {
            src: "./assets/restaurants/ichi_go_ramen.png"
        },
        adresseMap: "https://maps.app.goo.gl/aQvtyLuXAV95aCHx9"
    },

    {
        nom: "Le café du marché",
        description: "Bar",
        prix: "€€€",
        distance: 220,
        href: "./restaurant_le_cafe_du_marche.html",
        reputation: 3,
        image: {
            src: "./assets/restaurants/le_cafe_du_marche.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/VPTojd7YfrM8gTDF7"
    },

    {
        nom: "Zygobar",
        description: "Bar",
        prix: "€€",
        distance: 400,
        href: "./restaurant_zygobar_2.html",
        reputation: 5,
        image: {
            src: "./assets/restaurants/zygobar_2.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/W8HF5WvLfjTjB8Ng9"
    },

    {
        nom: "Izakaya joyi",
        description: "Sushi",
        prix: "€€€",
        distance: 160,
        href: "./restaurant_izakaya_joyi.html",
        reputation: 5,
        image: {
            src: "./assets/restaurants/izakaya_joyi.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/uuHyFzCRUJTfQujMA"
    },

    {
        nom: "La Boulangerie d'Honoré",
        description: "Boulangerie",
        prix: "€",
        distance: 400,
        href: "./restaurant_la_boulangerie_honore.html",
        reputation: 4,
        image: {
            src: "./assets/restaurants/la_boulangerie_honore.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/pPPx4KvoqmQdf8WK7"
    },

    {
        nom: "Springfield",
        description: "Fast-Food",
        prix: "€",
        distance: 2300,
        href: "./restaurant_springfield.html",
        reputation: 2,
        image: {
            src: "./assets/restaurants/springfield.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/Bt6xc8Gk2L3jMqXA9"
    },

    {
        nom: "La Loco",
        description: "Poisson",
        prix: "€€€",
        distance: 1000,
        href: "./restaurant_la_loco.html",
        reputation: 3,
        image: {
            src: "./assets/restaurants/la_loco.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/Y6kRUgXG21vCfBH77"
    },

    {
        nom: "Tierra Maya",
        description: "Mexicaine",
        prix: "€",
        distance: 700,
        href: "./restaurant_tierra_maya.html",
        reputation: 4,
        image: {
            src: "./assets/restaurants/tierra_maya.jpg"
        },
        adresseMap: "https://maps.app.goo.gl/wPicHTwWADThmPo67"
    },

    {
        nom: "Back Bay",
        description: "Américaine",
        prix: "€€",
        distance: 850,
        href: "./restaurant_back_bay.html",
        reputation: 4,
        image: {
            src: "./assets/restaurants/back_bay.jpg",
        },
        adresseMap: "https://maps.app.goo.gl/BweGPiR9y9hxABS27"
    },

    {
        nom: "La Recre",
        description: "Végétarien",
        prix: "€€",
        distance: 50,
        href: "./restaurant_la_recre.html",
        reputation: 4,
        image: {
            src: "./assets/restaurants/la_recre.jpg",
        },
        adresseMap: "https://maps.app.goo.gl/dUjXYyVWd7YPrWA26"
    }
]
console.log("liste des carte restaurant ", restaurants);


// Données des restaurants (remplacez ces données par les vôtres)


// Fonction pour créer et injecter les cartes des restaurants dans le HTML

let container = document.querySelector('.container_card');

restaurants.forEach(function (restaurant) {
    let card = document.createElement("li");
    card.classList.add("card");

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

    // let reputation = document.createElement("img");
    // reputation.classList.add("img-card");
    // reputation.src = restaurant.src;
    // div.appendChild(reputation);

    let reputation = document.createElement("p");
    reputation.classList.add("img-card");
    reputation.textContent = restaurant.reputation;
    div.appendChild(reputation);

    let description = document.createElement("p");
    description.classList.add("A");
    description.textContent = "#" + restaurant.description;
    div.appendChild(description);


    container.appendChild(card);
});






export default restaurants;