$('body').delegate('.page-scroll', 'click', function(){
  event.preventDefault();
    $('html,body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'easeInOutCubic');
        
});