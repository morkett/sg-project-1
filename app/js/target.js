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
  this.$element = $('<div class="target"></div>');
  this.$element.appendTo(this.$container);

  console.log(this.$element.offset());
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

// Target.prototype.moveTo(x, y) {
//   // TODO: use jQuery to position this.$element as specified
// };

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
    console.log('hit');
    $(this).addClass('bg-explosion');
    setTimeout(function () {
      $('.bg-explosion').remove();
    }, 400);
  });

  Target.prototype.score = function(){

  };
};
