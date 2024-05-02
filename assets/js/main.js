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

 function AutoPlaySlider() {
  const topBlk = document.querySelector('.getstarted-wrap')
  setInterval(() => {
    if (topBlk.classList.contains('first_step')) {
      topBlk.classList.remove('first_step')
      topBlk.classList.add('second_step')
    }else if (topBlk.classList.contains('second_step')){
      topBlk.classList.remove('second_step')
      topBlk.classList.add('third_step')
    }else if (topBlk.classList.contains('third_step')){
      topBlk.classList.remove('third_step')
      topBlk.classList.add('first_step')
    }else{
      topBlk.classList.add('first_step')
    }
  }, 3000);
 }
 AutoPlaySlider()
  
 
})(jQuery);
