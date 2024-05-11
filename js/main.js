// ======= <STICKY HEADER START> =======
const header = document.querySelector(".sticky_header");
const toggleClass = "sticky";

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
    header.classList.add(toggleClass);
    } else {
    header.classList.remove(toggleClass);
    }
});
// ======= <STICKY HEADER END> =======


// ======= <MENU SCROLLSPY START> =======
const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.nav-link' );
  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }
  
  const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.scrollspy_nav_active' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
        }
    } 
  }
  
  makeNavLinksSmooth( );
  spyScrolling( );
// ======= <MENU SCROLLSPY END> =======
  

// ======= <TESTIMONIAL CAROUSEL START> =======
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#testimonial-items').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
// ======= <TESTIMONIAL SLIDER END> =======


// ======= <CONTACT SECTION START> =======
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// ======= <CONTACT SECTION END> =======


// ======= <STICKY BACK TO TOP BUTTON START> =======
$(document).ready(function() {

  // SHOW OR HIDE STICKY GO TOP BUTTON

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go_top').fadeIn(200);
    } else {
      $('.go_top').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.go_top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});
// ======= <STICKY BACK TO TOP BUTTON END> =======