$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaytimeout:1000,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
})
var headerBg = document.getElementById('carouselExampleIndicators')
window.addEventListener('scroll',function(){
    headerBg.style.opacity = 1 - +window.pageXOffset/550+'';
})