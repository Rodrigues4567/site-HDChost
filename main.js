
let button = document.querySelector('.mobile-button');

button.addEventListener('click', menuShow = () => {
    let menuMobile = document.querySelector('.mobile-menu-options');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'icones/menu.svg'
    }
    else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'icones/alfabeto.png'
    }
})