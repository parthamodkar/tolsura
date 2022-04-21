$(window).scroll(function (event) {
    //Get require info
    var secAdjust = 200;
    var winscrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var secOffsetTop = $('#isi-expand').offset().top;

    //Toggle class to hide section
    $('#isi').toggleClass('d-none', ( winscrollTop + winHeight - secAdjust ) >= secOffsetTop );
});

function loadJS(u) {
  var r = document.getElementsByTagName("script")[0],
      s = document.createElement("script");
  s.src = u;
  r.parentNode.insertBefore(s, r);
}

if (!window.HTMLPictureElement) {
loadJS("https://afarkas.github.io/lazysizes/plugins/respimg/ls.respimg.min.js");
}

// Submenu Click
if ( $(window).width() < 992 ) {
  $('header .primary__nav ul li a').click(function(){
    $(this).next('ul').slideToggle();
  });
}

$(document).ready(function(){
  $(".expand-isi").click(function(){
    $("body").toggleClass("intro");
  });
  $('#myModal').on('shown.bs.modal', function () {
    $('#myModal').trigger('focus')
  });
  $('#myVideo').on('shown.bs.modal', function () {
    $('#myVideo').trigger('focus')
  });
  $('.nav__toggle').click(function(){
    $('.nav__block').toggleClass('active');
    $(this).toggleClass('active');
    $('html').toggleClass('hide-scroll');
    $('body').toggleClass('hide-scroll');
  });
  $('a[href^="#"]').click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top 
    }, 1000);
  });
  $('header .secondary__nav ul li a').click(function(){
    $('.nav__block').removeClass('active');
    $('.nav__toggle').removeClass('active');
    $('html').removeClass('hide-scroll');
    $('body').removeClass('hide-scroll');
  });
});