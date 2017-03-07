/* global Score, Target, Target2 $container */

$(document).ready(function(){
  var score = new Score();
  var $container = $('.container');
  var target1 = new Target($container,50, 0, 500);
  var target2 = new Target($container,300, -200, 7);
  var target3 = new Target($container,600, -300, 7);
  var target4 = new Target($container,800, -500, 7);
  var target5 = new Target($container,950, -50, 7);
  var target6 = new Target($container,1250, -50, 7);

  var target7 = new Target2($container,-100,100,7);
  var target8 = new Target2($container,-70,300,0);
  var target9 = new Target2($container,-50,550,0);
  var target10 = new Target2($container,-20,650,0);
  var target11 = new Target2($container,-150,450,0);
  var targets = [target1, target2, target3, target4, target5, target6, target7, target8, target9, target10, target11];





  $('.target, .target2').click(function(){
    console.log(score);
    $('.score-number').html(score.increaseBy(100));
  });

  var lifes = 4;
  var looseLife = [$('.life3'), $('.life2'), $('.life1')];
  $('.btn').click(function(){
    $('.instructions-container').fadeOut();


    var doUpdate = function() {
      $('.countdown').each(function() {

        var count = parseInt($(this).html());
        if (count !== 0) {
          $(this).html(count - 1);
        }
        if(count === 0) {
          lifes-=1;
          if(lifes === 3){
            $('.lost-a-life-container').show();
            looseLife[2].hide();
            setTimeout(function () {
              $('.lost-a-life-container').fadeOut(1000);
            }, 10);
            setTimeout(function () {
              $('.lost-a-life-container').hide();
            }, 1000);
            count = parseInt($(this).html(10));


          }
          if(lifes<3) {
            $('.lost-a-life-container').show();
            looseLife[1].hide();
            setTimeout(function () {
              $('.lost-a-life-container').fadeOut(1000);
            }, 10);
            setTimeout(function () {
              $('.lost-a-life-container').hide();
            }, 1000);
            count = parseInt($(this).html(10));
          }
          if(lifes<2) {
            $('.lost-a-life-container').hide();
            looseLife[0].hide();
            $('.game-over-container').fadeIn();
          }
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
