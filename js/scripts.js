$(document).ready(function() {
    
    
    /******Navigation scroll******/
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          };
        });
      }
    }
  });
   
    $(".js--button").click(function(){
        $(".popup").fadeIn("slow");
    });
    
     $(".popup__close").click(function(){
        $(".popup").fadeOut("slow");
    });
    
      $(".js--buttonbook").click(function(){
        $(".popup").fadeOut("slow");
    });
    

});



    