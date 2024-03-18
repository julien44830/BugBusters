let restaurants = [
{
    nom: "Nom du restaurant1",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant2",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 180,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},
{
    nom: "Nom du restaurant3",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant4",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},
{
    nom: "Nom du restaurant5",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant6",
    description: "#restauration gastronomique",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant7",
    description: "#fuit de mère",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant8",
    description: "#végane",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

 {
    nom: "Nom du restaurant9",
    description: "#végane",
    prix: "€€€",
    distance: 305,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "Nom du restaurant10",
    description: "#végane",
    prix: "€€€",
    distance: 305 ,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

{
    nom: "casse croute",
    description: "#viande",
    prix: "€€€€€",
    distance: 1005,
    reputation:{
        src:"../assets/icones/etoile_icone.png"
    },
    adresseMap: "Adresse sur la carte",
    image: {
        src : "../assets/restaurants/restaurant_1.png"
}
},

// Création d'un tableau pour stocker les objets de restaurant

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
        img.classList.add("img-restaurant-card");
        img.alt = "Image du restaurant";
        img.src = restaurant.image.src;
        card.appendChild(img);

        let div = document.createElement("div")
        div.classList.add("describe-card");
        card.appendChild(div);

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
        
        let reputation = document.createElement("img");
        reputation.classList.add("img-card");
        reputation.src = restaurant.reputation.src;
        div.appendChild(reputation);
        
        let description = document.createElement("p");
        description.classList.add("A");
        description.textContent = restaurant.description;
        div.appendChild(description);
        

        container.appendChild(card);
    });



