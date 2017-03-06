/* global Score, Target, $container */

$(document).ready(function(){
  var score = new Score(100);
  var $container = $('.container');
  var target1 = new Target($container,50, 0, 500);
  var target2 = new Target($container,100, -100, 7);
  var target3 = new Target($container,300, -100, 7);
  var target4 = new Target($container,400, -200, 7);
  var target5 = new Target($container,550, -50, 7);
  var targets = [target1, target2, target3, target4, target5];

$('.btn').click(function(){
  $('.instructions-container').fadeOut();
setTimeout(function () {


  targets.forEach(function (target) {
    target.show();
    setTimeout(function () {
      target.moveDown();
    }, 1000);
  });
  }, 1000);
});




  setInterval(movePlane, 20);
  var keys = {};

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
    delete keys[e.keyCode];
  });


  function movePlane() {
    for (var direction in keys) {
      if (!keys.hasOwnProperty(direction)) {
        continue;
      }
      if (parseInt(direction) === 37) {
        $('#div1').animate({left: '-=5'}, 0);
      }
      if (direction == 38) {
        $('#div1').animate({top: '-=5'}, 0);
      }
      if (direction == 39) {
        $('#div1').animate({left: '+=5'}, 0);
      }
      if (direction == 40) {
        $('#div1').animate({top: '+=5'}, 0);
      }
    }
  }


});
