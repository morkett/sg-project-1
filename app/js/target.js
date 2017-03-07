/**
 * @param x initial x position
 * @param y initial y position
 * @param deltaY the amount (in pixels) by which this target will move vertically
 */
function Target($container, x, y, deltaY) {
  this.x = x;
  this.y = y;
  this.deltaY = deltaY;
  this.$container = $container;
  this.init();
  this.$element.offset({ top: y, left: x });
  console.log('init');

}

Target.prototype.init = function () {
  this.$container = $('.container');
  this.$element = $('<div class="target target-flame"></div>');
  this.$element.appendTo(this.$container);

  this.hide();
  this.moveDown();
  this.explode();
  // this.moveTo(this.x, this.y);
};

Target.prototype.hide = function () {
  if (this.$element) {
    this.$element.hide();
  }
};

Target.prototype.show = function () {
  if (this.$element) {
    this.$element.show();
  }
};


Target.prototype.moveBy = function (byX, byY) {
  this.x += byX;
  this.y += byY;
};

Target.prototype.moveDown = function () {
  $('.target').addClass('target-moveDown');
  this.y += this.deltaY;

};

Target.prototype.explode = function () {
  $('.target').click(function(){
    // console.log('hit');
    $(this).removeClass('target-flame');
    $(this).addClass('bg-explosion');

    setTimeout(function () {
      $('.bg-explosion').remove();
    }, 400);
  });
};

function Target2($container, x, y, deltaY) {
  this.x = x;
  this.y = y;
  this.deltaY = deltaY;
  this.$container = $container;
  this.init();
  this.$element.offset({ top: y, left: x });
  console.log('target2 init');

}

Target2.prototype.init = function () {
  this.$container = $('.container');
  this.$element = $('<div class="target2 target2-flame"></div>');
  this.$element.appendTo(this.$container);

  this.hide();
  this.moveDown();
  this.explode();
  // this.moveTo(this.x, this.y);
};

Target2.prototype.hide = function () {
  if (this.$element) {
    this.$element.hide();
  }
};

Target2.prototype.show = function () {
  if (this.$element) {
    this.$element.show();
  }
};


Target2.prototype.moveBy = function (byX, byY) {
  this.x += byX;
  this.y += byY;
};

Target2.prototype.moveDown = function () {
  $('.target2').addClass('target-moveRight');
  this.y += this.deltaY;

};

Target2.prototype.explode = function () {
  var clickCount = 0;
  $('.target2').click(function(){

    clickCount+=1;
    console.log(clickCount);
    if(clickCount === 1){
      $(this).addClass('on-fire');
    }
    if( clickCount===2 && $(this).hasClass('on-fire')) {
      $(this).removeClass('target2-flame');
      $(this).addClass('bg-explosion');
      $(this).removeClass('on-fire');
      clickCount = 0;

      setTimeout(function () {

        $(this).remove();
        $('.bg-explosion').remove();

      }, 400);
    }
  });

};
