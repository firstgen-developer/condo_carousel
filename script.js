// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 20,
//     centeredSlides: true ,
//     centeredSlidesBounds: true,

//     breakpoints: {
//         420: {
//           slidesPerView: 3,
//         },

//         768: {
//           slidesPerView: 4,
//         },

//         960: {
//           slidesPerView: 5,
//         },
//       }, 
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


setTimeout(function() {
    // const swiper = new Swiper('.carousel-container', {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true ,
        centeredSlidesBounds: true,
        // wrapperClass: 'slide', // what is wrapping the individual items
        // slideClass: 'exec-slider',
        breakpoints: {
          420: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          960: {
            slidesPerView: 3,
          },
        }, 
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: "bullets",
          clickable: true,
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
},50)

setTimeout(function() {
    var swiperTes = new Swiper('.mySwiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 21,
        centeredSlides: true ,
        centeredSlidesBounds: true,
        loop: true,
        wrapperClass: 'item', // what is wrapping the individual items
        slideClass: 'exec-slider', 
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
},50)


// ('.wp-block-gallery').each(function(i){
//     (this).append('swiper-slide');
// });

// ('.wp-block-gallery').each(function(i){
//     (this).append('<div class="swiper-pagination"></div>');
// });

// ('.wp-block-gallery').each(function(i){
//     (this).append('<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></div>');
// });

// ('.wp-block-gallery').each(function(i){
//     (this).append('<div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></div>');
// });


// function initHeaderHeights() {
//   const headerContHeight = $('.image-header-content').outerHeight();
//   const heroContHeight = $('.hero-title').outerHeight();

//   $('.image-image').height(headerContHeight);
//   $('.hero-image').height(heroContHeight);
// }

// initHeaderHeights();

// $(window).resize(function() {
//   initHeaderHeights();
// })
