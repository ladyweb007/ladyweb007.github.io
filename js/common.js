$(function() {


if (typeof $.fn.ripples == 'function') {
        try {
          $('.ripple').ripples({
            resolution: 300,
            perturbance: 0.01
          });
        } catch (e) {
          $('.error').show().text(e);
        }
      }

 $(document).on("mouseover", ".site__btn-contacts,wave-contacts", function(event){
  $(".home__octopus").css("background-image",'url(img/octopus/octopus-contacts.png)');
  $(".home__octopus").css("width",'128px');
  $(".home__octopus").css("height",'128px');
});

 $(document).on("mouseover", ".site__btn-skills,.wave-skills", function(event){
  $(".home__octopus").css("width",'128px');
  $(".home__octopus").css("height",'128px');
  $(".home__octopus").css("background-image",'url(img/octopus/octopus-skills.png)');
  
});

 $(document).on("mouseover", ".site__btn-portfolio,.wave-portfolio", function(event){
  $(".home__octopus").css("background-image",'url(img/octopus/octopus-portfolio.png)');
  $(".home__octopus").css("width",'128px');
  $(".home__octopus").css("height",'128px');
});


 $(document).on("mouseout", ".site__btn-contacts,.site__btn-skills,.site__btn-portfolio,.wave-portfolio,.wave-skills,wave-contacts", function(event){
  $(".home__octopus").css("background-image",'url(img/octopus/octopus.png)');
  $(".home__octopus").css("width",'110px');
  $(".home__octopus").css("height",'110px');
});

// $(document).on("", ".site__btn-contacts", function(event){
//    $(".home__octopus").css("width",'100px');
//    $(".home__octopus").css("bottom",'78%');
//    $(".home__octopus").css("left",'75%');
//    $(".home__octopus").css("transform",'rotate(-45deg)');
// });

// $(document).on("mouseout", ".site__btn-contacts", function(event){
//   $(".home__octopus").css("width",'70px');
//   $(".home__octopus").css("bottom",'8%');
//   $(".home__octopus").css("left",'14%');
//   $(".home__octopus").css("transform",'rotate(45deg)');
       
// });

$(document).on("mouseover", ".skills__text-item", function(event){
  $(".skills__hero-text").css("z-index",'10');
  $(".skills__hero-text").css("opacity",'1');
  $(".skills__hero-text").css("top",'120px');
});

$(document).on("mouseout", ".skills__text-item", function(event){
   $(".skills__hero-text").css("z-index",'0');
   $(".skills__hero-text").css("opacity",'0');
    $(".skills__hero-text").css("top",'0');
});

$('.header-fixed__trigger,nav').on('click', function(){
  $('.header-fixed__trigger-icon').toggleClass('is-clicked'); 
  $('nav').toggleClass('menu-is-close');
 
});

// $('.site__btn-portfolio,.site__btn-skills,.site__btn-contacts').on('click', function(){
//     if (!(( $('header-fixed__trigger-icon').hasClass('is-clicked') ))) {
//       $('.header-fixed__trigger-icon').toggleClass('is-clicked'); 
//       $('nav').toggleClass('menu-is-close');
//     };
   
//   });

});
