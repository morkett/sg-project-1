function Score() {
  this._value = 0;
  this.value = function () {
    return this._value;
  };
  this.increaseBy = function (value) {
    return this._value += value;
  };
  this.scoreOnCLick = function() {

  };
}
