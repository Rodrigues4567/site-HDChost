
let button = document.querySelector('.mobile-button');

button.addEventListener('click', menuShow = () => {
    let menuMobile = document.querySelector('.mobile-menu-options');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open')
    }
})