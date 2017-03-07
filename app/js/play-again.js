// PLAY AGAIN

$(document).ready(function(){
  $('body').fadeIn();
  $('.lost-a-life-container').hide();
  $('.game-over-container').hide();
  $('.game-over-inside .btn').click(function(){
    location.reload();
  });

});
