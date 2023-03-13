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