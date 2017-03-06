function Score() {
  this._value = 200;
  this.value = function () {
    return this._value;
  };
  this.increaseBy = function (value) {
    this._value += value;
  };
  // this.decreaseBy = function (value) {
  //   this._value -= value;
  // };
}
