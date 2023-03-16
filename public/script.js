
// overlay menu
const menu = document.querySelector('.menu-button')
const overlayContent = document.querySelector('.overlay-content')
const html = document.querySelector('html')
const article = document.querySelector('article')
const clickAwayMenu = document.querySelector('.click-away-menu')

menu.addEventListener('click', menuContent)
clickAwayMenu.addEventListener('click', menuAway)

function menuContent(){
    overlayContent.classList.add('visible-menu-overlay-content')
    html.classList.add('overflow-y')
    article.classList.add('pointer-event-none')
}

function menuAway(){
    overlayContent.classList.remove('visible-menu-overlay-content')
    html.classList.remove('overflow-y')
    article.classList.remove('pointer-event-none')
}



// tips slide

// definieer de variabelen
const buttonLeft = document.querySelector('.button-tips-left')
const buttonRight = document.querySelector('.button-tips-right')

// laat de slide bij de eerste beginnen
let slideIndex = 1

// laat de functie showdivs in actie treden (als de slideindex 1 is, zie je de eerste 'tip').
showDivs(slideIndex);

// Geef de knoppen een eventlistener
buttonLeft.addEventListener('click', function() { plusClick(-1) });
buttonRight.addEventListener('click', function() { plusClick(1) });

// deze functie wordt uitgevoerd wanneer je op de button klikt, 
// Met showDivs(slideIndex += n); geeft die aan of de slideindex een pagina verder of terug moet gaan.
function plusClick(n){
    showDivs(slideIndex += n);
    console.log('click')
}

// Deze onderstaand functie showdivs besluit welke 'tip' te zien is.
// n staat voor de slideindex waarde
// x staat voor de slides
// met de i wordt er een loop uitgevoerd, i gaat gewoon getallen langs, en zolang het getal kleiner is dan
// de lengte van het aantal slider wordt er een nummer bij opgeteld
// [slideIndex-1] wordt gebruikt omdat bijvoorbeeld +3 eigenlijk overeenzou komen met index 2.
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("tips-slider");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "flex";  
  }
