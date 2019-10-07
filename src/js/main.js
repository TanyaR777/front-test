// Custom scripts

// Humburger
$(document).ready(function(){

  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
    
        $("#hamburger-1").click(function(){
          $(".mobile-nav-menu").slideToggle(500);
      });

}); 

$(window).resize(function() {
  if ($(window).width() > 768) {
    $(".mobile-nav-menu").removeAttr('style');
  }
});

// Header-search
$(document).ready(function(){
  
  $('.search-icon').addClass('closed');

  $('.search-icon .search-icon-btn').click(function(e) {
    if ($('.search-icon').hasClass('closed')) {
      $('.search-icon').removeClass('closed').addClass('opened');
    } else {
      $('.search-icon').removeClass('opened').addClass('closed');
      $('.search-icon').removeClass('opened');
    }

    $(".search-toogle").slideToggle(300).css("display", "flex");
  });



}); 

$(window).resize(function() {
  if ($(window).width() > 768) {
    $(".search-toogle").removeAttr('style');
  }
});


/// Rating



// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    
      items: 1,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      dots: true,
      

    });
  }); 
  
  // the following to the end is whats needed for the thumbnails.
  jQuery( document ).ready(function() {
       
    
          // 1) ASSIGN EACH 'DOT' A NUMBER
              dotcount = 1;
       
              jQuery('.owl-dot').each(function() {
                jQuery( this ).addClass( 'dotnumber' + dotcount);
                jQuery( this ).attr('data-info', dotcount);
                dotcount=dotcount+1;
              });
              
               // 2) ASSIGN EACH 'SLIDE' A NUMBER
              slidecount = 1;
       
              jQuery('.owl-item').not('.cloned').each(function() {
                jQuery( this ).addClass( 'slidenumber' + slidecount);
                slidecount=slidecount+1;
              });
              
              // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
              jQuery('.owl-dot').each(function() {
              
            grab = jQuery(this).data('info');
  
            slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
            console.log(slidegrab);
  
            jQuery(this).css("background-image", "url("+slidegrab+")");  
  
        });
              

  });



//// Footer

$(document).ready(function(){
 

$('.footer__title').on('click', function () {
  $(this).parent().find('.footer__link').slideToggle( "300");
  $(this).toggleClass('active').find('i.fa').toggleClass("fa-chevron-up fa-chevron-down");
});
 

});






  
