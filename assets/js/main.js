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
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    autoplaySpeed: 500,
    nav: false,
    dots: true, 
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
        
        // check item need change bg or not
        if (activeItem.nextElementSibling.dataset.bg) {
          form.classList.add(activeItem.nextElementSibling.dataset.bg)
        }else{
          form.classList.remove(activeItem.nextElementSibling.dataset.bg)
          form.classList.remove(activeItem.dataset.bg)
        }

        // SHow up the tahnks screen
        if (activeItem.nextElementSibling.classList.contains('thankyouscreen')) {
          activeItem.classList.remove('active')
          activeItem.nextElementSibling.classList.add('active') 
          activeItem.parentElement.parentElement.classList.add('last_thank_you') 
        } 

        // scroll to top
        window.scrollTo(0,0);

        // pass active item into top
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

    // get more option rate spouse
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

    // get more option based on applied insurance
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


    // add another beneficiary
    const beneficiary = document.querySelectorAll('input[name="beneficiary"]')
    const anotherBeneficiary = document.querySelector('.another_beneficiary')
    beneficiary.forEach(mSt => {
      mSt.addEventListener('change', () => {
        if (mSt.value == "yes") {
          anotherBeneficiary.style.display = "block"
        }else{
          anotherBeneficiary.style.display = "none"
        }
      })
    })


    // add another contingent beneficiary
    const contingentVeneficiary = document.querySelectorAll('input[name="contingent_beneficiary"]')
    const anotherBeneficiary2 = document.querySelector('.another_beneficiary_2')
    contingentVeneficiary.forEach(mSt => {
      mSt.addEventListener('change', () => {
        if (mSt.value == "yes") {
          anotherBeneficiary2.style.display = "block"
        }else{
          anotherBeneficiary2.style.display = "none"
        }
      })
    })
    


  }
}
MultistepForm()


// One page static nav
function OnePageNav() {
  let allItems = document.querySelectorAll('.one__pageNav ul li a')
  if (allItems.length > 0) {
    allItems.forEach(item => {
      item.addEventListener('click', (e) => { 
        allItems.forEach(aItm => {
          aItm.classList.remove('active')
        })
        item.classList.add('active')
      })
    })
  }
}
OnePageNav() 
 
})(jQuery);
