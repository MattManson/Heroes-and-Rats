const Rat = function() {

  Rat.prototype.snaffle = function(food) {
    food.contaminate();
  };
}

module.exports = Rat;
