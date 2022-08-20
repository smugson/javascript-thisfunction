var x = document.getElementById("hero-container");

function changeHero(element){
	x.innerHTML = element.alt;
	x.style.backgroundImage = "url(" + element.src + ")";
	x.style.backgroundSize = "100% 100%";
	x.style.backgroundRepeat = "no-repeat";
}

function changeAgain(){
	x.style.className = "hero-container";
}
