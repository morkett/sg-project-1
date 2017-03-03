// $(document).ready(function() {
//
//   $('div').click(function(){
//     $(this).toggleClass('animation-stop');
//   });
//
//
//
//
//
// }); /* document ready */
$(document).ready(function(){

  $('.target').click(function(){
    $(this).hide();

    setTimeout(function () {
      $('.target').show();
    }, 1000);
  });

  animateDiv();


  function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 200;
    var w = $(window).width() - 200;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

  }

  function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.target').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.target').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });



  }

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.3;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;



  }



});
