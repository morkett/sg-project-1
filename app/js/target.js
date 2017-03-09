//////////////////////////////////
//TARGET BUILD
/////////////////////////////////

/**
 * @param x initial x position
 * @param y initial y position
 * @param deltaY the amount (in pixels) by which this target will move vertically
 */
 //////////////////////////////////
 //TARGET 1
 /////////////////////////////////
function Target1(x, y, deltaY) {
  this.x = x;
  this.y = y;
  this.deltaY = deltaY;
  this.init();
  this.$element.offset({ top: y, left: x });
}
///// Target1 INIT
Target1.prototype.init = function () {
  this.$container = $('.container');
  this.$element = $('<div class="target target-flame"></div>');
  this.$element.appendTo(this.$container);
  this.$targetSelector = $('.target');

  this.hide();
  this.moveDown();
  this.explode();
};

///// Target1 HIDE
Target1.prototype.hide = function () {
  if (this.$element) {
    this.$element.hide();
  }
};

///// Target1 SHOW
Target1.prototype.show = function () {
  if (this.$element) {
    this.$element.show();
  }
};

///// Target2 MOVEDOWN
Target1.prototype.moveDown = function () {
  this.$targetSelector.addClass('target-moveDown');
  this.y += this.deltaY;

};

///// Target1 EXPLODE
Target1.prototype.explode = function () {
  this.$element.click(function(){
    $(this).removeClass('target-flame');
    $(this).addClass('bg-explosion');

    setTimeout(function () {
      $('.bg-explosion').remove();
    }, 400);
  });
};


//////////////////////////////////
//TARGET 2
/////////////////////////////////

function Target2(x, y, deltaY) {
  this.x = x;
  this.y = y;
  this.deltaY = deltaY;
  this.init();
  this.$element.offset({ top: y, left: x });
}
///// Target2 INIT
Target2.prototype.init = function () {
  this.$container = $('.container');
  this.$element = $('<div class="target2 target2-flame"></div>');
  this.$element.appendTo(this.$container);
  this.$targetSelector = $('.target2');

  this.hide();
  this.moveDown();
  this.explode();
};
///// Target2 HIDE
Target2.prototype.hide = function () {
  if (this.$element) {
    this.$element.hide();
  }
};

///// Target2 SHOW
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
  this.$targetSelector.addClass('target-moveRight');
  this.y += this.deltaY;

};

//EXPLODE + CLICK COUNT LOG
Target2.prototype.explode = function () {
  var clickCount = 0;
  this.$element.click(function(){

    clickCount+=1;
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
