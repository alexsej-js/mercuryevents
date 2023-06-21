// Swiper
const swiper = new Swiper('.swiper', {

    autoplay: {
      delay: 5000,
    },
    speed: 2000,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.pag',
    },

  });
  
  // Swiper2
const swiper2 = new Swiper('.swiper2', {

    autoplay: {
      delay: 4000,
    },
    speed: 1000,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.pag',
    },
    effect: 'fade',
    cubeEffect: {
      slideShadows: true,
    },
  });


    // Swiper3
const swiper3 = new Swiper('.swiper3', {

    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.pag',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  $( document ).ready(function() {
    $('.slider').slick({
       slidesToShow: 4,
       dots: true,
       slidesToScroll: 2,
       centerMode: true,
       autoplay: true,
       autoplaySpeed: 5000,
       responsive: [
          {
               breakpoint: 4500,
               settings: {
                   slidesToShow: 4,
                   centerMode: true,
                   slidesToScroll: 2,
                   infinite: true,
                   dots: true
               }
         },
         {
           breakpoint: 2100,
           settings: {
             slidesToShow: 3,
             centerMode: true,
             slidesToScroll: 2,
             infinite: true,
             dots: true
           }
         },
           {
               breakpoint: 1500,
               settings: {
                   slidesToShow: 2,
                   centerMode: true,
                   slidesToScroll: 1,
                   infinite: true,
                   dots: true
               }
           },
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             centerMode: true,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 768,
           settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
           }
         },
         // {
         //   breakpoint: 350,
         //   setting: {
   
         //   }
         // }
   
       ]
     });
   });


   //  карта

google.maps.event.addDomListener(window, 'load', init);

function init() {

  let mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(25.111294, 55.138198), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#686868" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "lightness": "-22" }, { "visibility": "on" }, { "color": "#b4b4b4" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "saturation": "-51" }, { "lightness": "11" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "saturation": "3" }, { "lightness": "-56" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-52" }, { "color": "#9094a0" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "weight": "6.13" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "weight": "1.24" }, { "saturation": "-100" }, { "lightness": "-10" }, { "gamma": "0.94" }, { "visibility": "off" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b4b4b4" }, { "weight": "5.40" }, { "lightness": "7" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#231f1f" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text.fill", "stylers": [{ "visibility": "simplified" }, { "color": "#595151" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "lightness": "-16" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#d7d7d7" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "color": "#282626" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "saturation": "-41" }, { "lightness": "-41" }, { "color": "#2a4592" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "weight": "1.10" }, { "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "lightness": "-16" }, { "weight": "0.72" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-37" }, { "color": "#2a4592" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#eeed6a" }] }, { "featureType": "transit.line", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }, { "color": "#0a0808" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#b7e4f4" }, { "visibility": "on" }] }]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  let mapElement = document.querySelector('.map');

  // Create the Google Map using our element and options defined above
  let map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(25.111294, 55.138198),
    map: map,
    title: 'Snazzy!'
  });
}

// определение устройства пользователя

"use strict"


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('touch');

    let menuArrows = document.querySelectorAll('.menu-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            let menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('active-arrow');
            });
        }
    }

  } else {
    document.body.classList.add('pc');
}

// menu burger

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if (iconMenu) {
   
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}




// плавный скролл

const menuLinks = document.querySelectorAll('.link-menu[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// ______всплывающие элементы________

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.swiper')
  const headerScroll = document.querySelector('.header-scroll')
  const watsaapScroll = document.querySelector('.link-message__w')
  const telegramScroll = document.querySelector('.link-message__t')
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let heroShow = hero.offsetHeight / 1;

    (scrollTop >= heroShow) ? headerScroll.classList.add('show') : headerScroll.classList.remove('show');
    (scrollTop >= heroShow) ? watsaapScroll.classList.add('show2') : watsaapScroll.classList.remove('show2');
    (scrollTop >= heroShow) ? telegramScroll.classList.add('show2') : telegramScroll.classList.remove('show2');

  });
});
