(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('.menuShadow').toggleClass('show');
  }); 

    
  // owlCarousel
  $(".all-feedbacks").owlCarousel({
    loop: true, 
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    // responsive: {
    //   0: {
    //     items: 2
    //   },
    //   767: {
    //     items: 3
    //   },
    //   992: {
    //     items: 6
    //   }
    // }
  });

 
  
 
})(jQuery);
