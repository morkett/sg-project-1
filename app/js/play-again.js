// PLAY AGAIN

$(document).ready(function(){
  //body fade in
  $('body').fadeIn();
  //game over modal hide
  $('.lost-a-life-container').hide();
  $('.game-over-container').hide();
  $('.game-over-inside .btn, .you-win-inside .btn').click(function(){
    location.reload();
  });
//you win modal appear
  $('.you-win-container').hide();
});
