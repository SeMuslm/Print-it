const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flechegauche = document.getElementById('flechegauche')
const flechedroite = document.getElementById('flechedroite')
const dots = document.querySelector(".dots");
const quantiteSlides = slides.length;
let index = 0;
const imageElement = document.querySelector('#banner > img');
const nomElement = document.querySelector('#banner > p');

for (let i = 0; i < quantiteSlides; i++) {
	const dot = document.createElement("li");
	dot.classList.add("dot");
	dots.appendChild(dot);
	if (i === 0) { 
        dots.children[i].classList.add('dot_selected');
    }
}

function selected(){
	const dot = document.getElementsByClassName('dot');	
    for (let j = 0; j < dot.length; j++) {
        dot[j].classList.remove('dot_selected');
    }
    dot[index].classList.add('dot_selected');
}


function showSlide() {
    imageElement.src = `./assets/images/slideshow/${slides[index].image}`;
    nomElement.innerHTML = slides[index].tagLine;
    console.log(imageElement);
    console.log(nomElement);
    selected();
}

flechegauche.addEventListener("click", function () {
    if (index == 0) {
        index = quantiteSlides - 1;
    }
    else {
        index--;
    }
        console.log(flechegauche);
        showSlide();
});

flechedroite.addEventListener("click", function () {
    if (index == quantiteSlides - 1) {
        index = 0;
    } else {
            index++;
    }
    console.log(flechedroite);
    showSlide();
});