const menu = document.querySelector('.menu-button')
const overlayContent = document.querySelector('.overlay-content')

menu.addEventListener('click', menuContent)

function menuContent(){
    overlayContent.classList.toggle('visible-menu-overlay-content')
}