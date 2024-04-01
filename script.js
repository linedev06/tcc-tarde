window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    // Se a posição de rolagem for maior que 50px, adiciona a classe 'colored' à navbar, caso contrário, remove a classe 'colored'
    if (scrollPosition > 50) {
        navbar.classList.remove('opacity');
        navbar.classList.add('colored');
        
    } else {
        navbar.classList.remove('colored');
        navbar.classList.add('opacity');
    }
});

window.addEventListener('scroll', function() {
    var card = document.getElementById('card');
    var carddetails = document.getElementById('carddetails');
    var scrollPosition = window.scrollY;

    // Verifica se a posição de rolagem é maior que 0
    if (scrollPosition > 0) {
        card.style.transition = '0.7s';
        card.style.background = '#f5f5f500'; // Esconde o card
        carddetails.style.color = '#f5f5f500';
        card.style.border = '#f5f5f500';
        // $(this).removeClass('.card_hover:hover')
    } else {
        card.style.display = 'block'; // Mostra o card
        card.style.background = '#f5f5f5'; // Esconde o card
        carddetails.style.color = '#000';
        card.style.border = '#FF9A00';

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

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const teste = entry.target;
//             teste.src = 
//         }
//     })
// })