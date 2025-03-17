$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              
              infinite: true,
              
            }
          },
         
          // instead of a settings object
        ]
      });
});