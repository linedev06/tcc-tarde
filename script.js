window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    // Se a posição de rolagem for maior que 50px, adiciona a classe 'colored' à navbar, caso contrário, remove a classe 'colored'
    if (scrollPosition > 50) {
        navbar.classList.add('colored');
        
    } else {
        navbar.classList.remove('colored');
    }
});

window.addEventListener('scroll', function() {
    var card = document.getElementById('card');
    var scrollPosition = window.scrollY;

    // Verifica se a posição de rolagem é maior que 0
    if (scrollPosition > 0) {
        card.style.transition = '0.5s';
        card.style.display = 'none'; // Esconde o card
    } else {
        card.style.display = 'block'; // Mostra o card
    }
});
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});