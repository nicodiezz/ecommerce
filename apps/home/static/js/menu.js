var menu_btn = document.getElementsByClassName('menu-btn').item(0);

function openNav() {
    menu_btn.classList.toggle('active');
    var header = document.getElementsByTagName('header').item(0);
    header.classList.toggle('hide');
}

menu_btn.addEventListener('click', function(event) {
    event.preventDefault();
    openNav();
});