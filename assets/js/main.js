(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');
    $('.menuShadow').toggleClass('show');
  }); 

    
  // feedback slider
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


  // Get started auto-slider
 function AutoPlaySlider() {
  if (document.querySelectorAll('.getstarted-wrap').length > 0) { 
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
 }
 AutoPlaySlider()
 
 
//  Multistep forms
function MultistepForm() {
  if (document.querySelectorAll(".all_form_step").length > 0) {
    const form = document.querySelector('form.multistep')
    let activeItem = form.querySelector('.all_form_step > .active')
    const nextBtns = form.querySelectorAll('.step_fixed_bottom button')
    
    nextBtns.forEach(nextBtn => { 
      nextBtn.addEventListener('click', (e) => { 
        if (activeItem.nextElementSibling.classList.contains('single_form_step') && !activeItem.nextElementSibling.classList.contains('thankyouscreen')) {
          activeItem.classList.remove('active')
          activeItem.nextElementSibling.classList.add('active')

          if (activeItem.nextElementSibling.nextElementSibling.classList.contains('thankyouscreen')) {
            form.classList.add('last_one')
          }
        }
        

        if (activeItem.nextElementSibling.classList.contains('thankyouscreen')) {
          activeItem.classList.remove('active')
          activeItem.nextElementSibling.classList.add('active') 
          activeItem.parentElement.parentElement.classList.add('last_thank_you') 
        } 
        // scroll to top
        window.scrollTo(0,0);
        activeItem = document.querySelector('.all_form_step > .active')
      })
    });
 
    



    // none of them function
    const NoneOFTheme = form.querySelector('.dslectall') 
    NoneOFTheme.addEventListener('click', () => {
      const AllInp = NoneOFTheme.parentElement.parentElement.parentElement.querySelectorAll("input")
      AllInp.forEach(inp => {
        if (!inp.classList.contains('dslectall')) {
          inp.checked = false 
        }
      })
    })

    // Personal info dependencies
    const marriedStatus = document.querySelectorAll('input[name="martial-status"]')
    const rateSpouse = document.querySelector('.rate_spouse')
    marriedStatus.forEach(mSt => {
      mSt.addEventListener('change', () => {
        if (mSt.value == "yes") {
          rateSpouse.style.display = "block"
        }else{
          rateSpouse.style.display = "none"
        }
      })
    })

    const rateSpouseYes = document.querySelectorAll('input[name="rate-status"]')
    const spouseInfo = document.querySelector('.spouse_info')
    rateSpouseYes.forEach(mSt => {
      mSt.addEventListener('change', () => {
        if (mSt.value == "yes") {
          spouseInfo.style.display = "block"
        }else{
          spouseInfo.style.display = "none"
        }
      })
    })

    const appliedForInsurance = document.querySelectorAll('input[name="applied_insurance"]')
    const declinedCoverage = document.querySelector('.declined_coverage')
    appliedForInsurance.forEach(mSt => {
      mSt.addEventListener('change', () => {
        if (mSt.value == "yes") {
          declinedCoverage.style.display = "block"
        }else{
          declinedCoverage.style.display = "none"
        }
      })
    })





  }
}
MultistepForm()



 
})(jQuery);
