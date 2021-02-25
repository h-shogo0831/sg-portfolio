$(function(){

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    fade:true,
    asNavFor:'.thumb',
    dots:false,
    arrows:false
  });

  $('.thumb').slick({
    slidesToShow:3,
    slidesToScroll:1,
    asNavFor:'.slider',
    focusOnSelect:true,
    dots:true,
  });

  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.sp-nav').toggleClass('open');
  });

  $('.top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });

  $('.nav').click(function(){
    const id = $(this).attr('href');
    const position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });

  $(window).on('load scroll',function (){
    $(".fade_off").each(function(){
      const imgPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
      
});