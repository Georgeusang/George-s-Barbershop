const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  
    
    keyboard: { 
      // enabled: true, 
      // onlyInViewport: false,
    },
  
    mousewheel:{
      invert:true,
    },
  
    autoplay: {
      delay: 1000,
     
    },
  
    speed: 400,
  
    loop: true,
  
  
    
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        2560: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    
  
  });
  