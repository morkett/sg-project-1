$(document).ready(function(){
  //BULLET
  $('.target, .target2').click( function(event) {
    $('#laser').css( {position: 'absolute', top: event.pageY, left: event.pageX});
    setTimeout(function () {
      $('#laser').addClass('laser-return');
    }, 200);
    setTimeout(function () {
      $('#laser').removeClass('laser-return');
    }, 10);
  });
});
