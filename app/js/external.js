/* global Score, Target, $container */

$(document).ready(function(){
  var score = new Score();
  var $container = $('.container');
  var target1 = new Target($container,50, 0, 500);
  var target2 = new Target($container,100, -100, 7);
  var target3 = new Target($container,300, -100, 7);
  var target4 = new Target($container,400, -200, 7);
  var target5 = new Target($container,550, -50, 7);
  var targets = [target1, target2, target3, target4, target5];




  $('.target').click(function(){
    console.log(score);
    $('.score-number').html(score.increaseBy(100));
  });



  setInterval(movePlane, 20);
  var keys = {};

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
    delete keys[e.keyCode];
    $('#div1').removeClass('div1-flame');
  });


  function movePlane() {
    for (var direction in keys) {
      if (!keys.hasOwnProperty(direction)) {
        continue;
      }
      if (parseInt(direction) === 37) {
        $('#div1').animate({left: '-=5'}, 0);
        $('#div1').addClass('div1-flame');
      }
      if (direction == 38) {
        $('#div1').animate({top: '-=5'}, 0);
        $('#div1').addClass('div1-flame');
      }
      if (direction == 39) {
        $('#div1').animate({left: '+=5'}, 0);
        $('#div1').addClass('div1-flame');
      }
      if (direction == 40) {
        $('#div1').animate({top: '+=5'}, 0);
        $('#div1').addClass('div1-flame');
      }
    }
  }

  $('.btn').click(function(){
    $('.instructions-container').fadeOut();

    var doUpdate = function() {
      $('.countdown').each(function() {
        var count = parseInt($(this).html());
        if (count !== 0) {
          $(this).html(count - 1);
        }
        if(count == 0) {
          console.log('you lose!');
        }
      });
    };

      // Schedule the update to happen once every second
    setInterval(doUpdate, 1000);
    setTimeout(function () {

      targets.forEach(function (target) {
        target.show();
        setTimeout(function () {
          target.moveDown();
        }, 1000);
      });
    }, 1000);
  });




});
