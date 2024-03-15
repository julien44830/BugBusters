
const buttonTest = document.querySelectorAll(".filtre");
console.log(buttonTest);

buttonTest.forEach((a) =>{

        a.addEventListener('click', function(){
            alert('coucou je suis le bouton : ', a);
    });

        a.addEventListener('mouseover', function() {
            a.style.backgroundColor = '#C88500';
    });

        a.addEventListener('mouseout', function() {
            a.style.backgroundColor = '#8d0008'; 
    });
});

const buttonPlus = document.querySelectorAll(".filtreplus");
console.log(buttonPlus);

buttonPlus.forEach((a) =>{

        a.addEventListener('click', function(){
            alert('coucou je suis le bouton un peu plus long: ', a);
    });

        a.addEventListener('mouseover', function() {
            a.style.backgroundColor = '#C88500';
    });

        a.addEventListener('mouseout', function() {
            a.style.backgroundColor = '#8d0008'; 
    });
});

