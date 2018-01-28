const Food = function(name, replenishmentValue){
this.name = name;
this.replenishment = replenishmentValue;
this.poisonous = false;
}

Food.prototype.contaminate = function () {
  this.poisonous = true;
};

// Food.prototype.safeCheck = function () {
//   if(this.poisonous === true){this.poisonHero;}
// };
// Food.prototype.poisonHero = function () {
//   this.replenishment = -this.replenishment;
// };
Food.prototype.favFood = function (hero) {
  return hero.checkFavFood(this) ? 1.5 : 1;
};
module.exports = Food;
