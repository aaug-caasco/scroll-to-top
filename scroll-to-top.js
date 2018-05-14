function scrollTo(idDestiny, offset, offsetResp, speed) {
  
  $('html, body').animate({ scrollTop: $(idDestiny).offset().top - offset }, speed);
}

$(document).on('click touchstart', '.scrollTrigger', function (e) { 
  e.preventDefault();
  scrollTo("#scrollDestination", -24, 55, 850); 
});