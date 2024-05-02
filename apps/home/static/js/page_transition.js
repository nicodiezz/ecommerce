//in

header = document.getElementsByClassName('header').item(0);

function in_function(){
    header.classList.remove('in');
}

setTimeout(in_function,500);


//out
var link = document.getElementById('transition-link');
    
function delayedRedirection(url) {
    setTimeout(function() {
        window.location.href = url; // Redirige a la URL después del tiempo especificado
    }, 500);
}

// Agregar un event listener al enlace
link.addEventListener('click', function(event) {
    event.preventDefault();
    menu_btn.classList.remove('active');
    
    header.classList.add('hide');
    header.classList.add('out');
    delayedRedirection(this.href);
});