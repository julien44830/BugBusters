const resulta = document.getElementsByClassName('resulta');
const clik = document.getElementsByClassName('click');
const body = document.body; // Sélectionnez directement le corps du document
const footer = document.querySelector('.footer'); // Sélectionnez l'élément avec la classe 'footer'

let clic = 1;
let num = 0;

console.log(clik, resulta, body, footer);

function cunter() {
    console.log('clik');
}

// Boucle à travers chaque élément avec la classe 'click' et ajoute l'écouteur d'événements
for (let i = 0; i < clik.length; i++) {
    clik[i].addEventListener("click", (e) => {
        const score = document.querySelector('.score');
        let scorePara = document.getElementsByClassName('scorePara');
        let message = "tu as utilisé ta souris " + clic + " fois pour rien";
        let scoreMessage = "ton score est de " + num;
        clic += 1;
        num += 1;
        console.log('valeur du click : ' + num);
        console.log(message);

        let clickSourie = document.createElement('p');
        clickSourie.classList.add("score");
        clickSourie.textContent = message;
        
        footer.appendChild(clickSourie);

        if(num >= 10){
            num += 2;
            score.classList.add('score');
            score.style.display = 'flex'; 
            scorePara[i].innerHTML = message + " et " + scoreMessage;
        };
        if(num >= 100){
            num += 2;
        };
        if(num >= 200){
            num += 2;
        };
        if(num >= 300){
            num += 2;
        };
        if(num == 1008){
            num += 2;
            message = "c'est trop!";
            alert('Faites une pause avec votre souris!');
        }

        // Parcourir chaque élément de la collection resulta
        for (let j = 0; j < resulta.length; j++) {
            // Mettre à jour le contenu HTML de chaque élément avec la valeur de message
            resulta[j].innerHTML = message;
        }
    });
};

console.log(resulta);
