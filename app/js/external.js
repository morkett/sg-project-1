
$(document).ready(function(){

//SCOREBOARD
  var score = 0;


//CLICK TARGET
  $('.target').click(function(){
    //change hide to classes
    $(this).addClass('target-fade-out');
    $('.target').show().addClass('target-out-of-range');
    setTimeout(function () {
      $('.target').show().removeClass('target-fade-out').removeClass('target-out-of-range');

    }, 2000);

    if(score >= 900) {
      //CHANGE WHAT HAPPENS AT 1000s POINTS
      $('body').hide();
    } else {
      $('.score-number').html(score+=100);
    }

  });

//RANDOM MOVEMENT
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

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;



  }
//
//

  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
      console.log('Not Hit');
      if(score >= 1000) {
        // TODO: CHANGE WHEN YOU REACH 1000 POINTS, YOU WIN
        $('body').hide();
      } else {
        //SCORE TOTAL
        $('.score-number').html(score+=10);
      }

    }    else {
      console.log('this worked');
      // TODO: CHANGE TO LOOSE LIFE + GAME OVER
      $('.target').addClass('target-fade-out');
      $('.target').show().addClass('target-out-of-range');
      setTimeout(function () {
        $('.target').show().removeClass('target-fade-out').removeClass('target-out-of-range');

      }, 2000);


    }
  }




  window.setInterval(function() {
    collision($('#div1'), $('.target'));
  }, 200);










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
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 37) {
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
