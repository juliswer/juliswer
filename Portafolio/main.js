const enviar = document.getElementById("enviar")

enviar.addEventListener("click", () => {
    Swal.fire({
        title: "¡Su correo ha sido enviado exitosamente!",
        text: "A la brevedad será respondido su mensaje. No olvide chequear la casilla de correos",
        icon: 'success',
        showCloseButton: true,
        timer: 5000,
        timerProgressBar: true,
    })
})

const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");

atras.addEventListener("click", (e) => {
    e.preventDefault
})

adelante.addEventListener("click", (e) => {
    e.preventDefault
})

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slide.length();
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
}

function atrasSlide(n){
    muestraSlides(indice-=n);
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});