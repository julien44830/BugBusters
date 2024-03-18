
const buttonTest = document.querySelectorAll(".filtre");
console.log(buttonTest);

buttonTest.forEach((a) =>{

        a.addEventListener('click', function(){
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
    });

        a.addEventListener('mouseover', function() {
            a.style.backgroundColor = '#C88500';
    });

        a.addEventListener('mouseout', function() {
            a.style.backgroundColor = '#8d0008'; 
    });
});

