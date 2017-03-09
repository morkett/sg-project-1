// PLAY AGAIN

$(document).ready(function(){
  document.getElementById('js-theme').volume = 0.5;


  $('.sound-lose').trigger('pause');
  $('.sound-menu').trigger('pause');
  $('.sound-shoot').trigger('pause');
  $('.sound-win').trigger('pause');
  $('.sound-lifeLoss').trigger('pause');
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
