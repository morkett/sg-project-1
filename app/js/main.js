/* global Score, Target, Target2 $container */

$(document).ready(function(){
  //CREATE TARGETS

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
  var score = new Score();
  var targets1 = [target1, target2, target3, target4, target5, target6];
  var targets2 = [target7, target8, target9, target10, target11];


// TRACK LIFES LEFT
  var lifes = 4;
  var looseLife = [$('.life3'), $('.life2'), $('.life1')];
  $('.btn').click(function(){
    //play menu sound
    $('.sound-menu').trigger('play');

    setTimeout(function () {


      $('.instructions-container').fadeOut();

    //INITIATE TARGETS1
      setTimeout(function () {
        targets1.forEach(function (target) {
          target.show();
          setTimeout(function () {
            target.moveDown();
          }, 1000);
        });
      }, 1000);

    //INITIATE TARGETS2
      setTimeout(function () {
        targets2.forEach(function (target) {
          target.show();
          setTimeout(function () {
            target.moveDown();
          }, 5000);
        });
      }, 6000);

    }, 500); //timeout btn for sounds

    //LOSING LIFES
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
            $('.sound-lifeLoss').trigger('play');
            looseLife[2].hide();
            setTimeout(function () {
              $('.lost-a-life-container').fadeOut(1000);
              $('.sound-lifeLoss').trigger('pause');
            }, 10);
            setTimeout(function () {
              $('.lost-a-life-container').hide();
            }, 1000);
            count = parseInt($(this).html(10));


          }
          if(lifes<3) {
            $('.lost-a-life-container').show();
            $('.sound-lifeLoss').trigger('play');
            looseLife[1].hide();
            setTimeout(function () {
              $('.lost-a-life-container').fadeOut(1000);
              $('.sound-lifeLoss').trigger('pause');
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
            $('.sound-game-over').trigger('play');
            setTimeout(function () {
              $('.sound-game-over').trigger('pause');
            }, 2000);
          }
        }
      });
    };

      // Schedule the update to happen once every second
    setInterval(doUpdate, 1000);

    //ADDS SCORES ON CLICK OF TARGET
    $('.target, .target2').click(function(){
      $('.sound-shoot').trigger('play');
      console.log(score);

      $('.score-number').html(score.increaseBy(100));
      if(score.value() === 100) {
        $('.lost-a-life-container').addClass('js-hide');
        looseLife[0].hide();
        $('.you-win-container').show();
        document.getElementById('js-theme').volume = 0;
        document.getElementById('js-lifeLoss').volume = 0;
        document.getElementById('js-game-over').volume = 0;
          //play win sound
        $('.sound-win').trigger('play');
        $('.sound-lose').trigger('pause');

        setTimeout(function () {
          document.getElementById('js-theme').volume = 0.5;
        }, 3000);

      }
    });

  }); //on btn click




}); // (document).ready
