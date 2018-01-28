const Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.quest = [];
}

Hero.prototype.talk = function(){
  return `That's CAPTAIN ${this.name} to you!`;
}
Hero.prototype.eat = function(food){
  // food.safeCheck();
  let variable = food.favFood(this);
  if(!food.poisonous){
  this.increaseHealth(food.replenishment * variable)
  }
  else this.decreaseHealth(food.replenishment * variable);
}
Hero.prototype.increaseHealth = function(value){
  this.health += value;
}
Hero.prototype.decreaseHealth = function(value){
  this.health -= value;
}
Hero.prototype.checkFavFood = function(food){
  return food.name === this.favFood ? true : false;
}
Hero.prototype.addTask = function (task) {
  this.quest.push(task);
}
Hero.prototype.sortTaskDifficulty = function() {
  return this.quest.sort((a,b) => b.difficulty - a.difficulty)
}
Hero.prototype.sortTaskUrgency = function () {
  return this.quest.sort((a,b) => b.urgency - a.urgency)
}
Hero.prototype.viewIncompleteTasks = function(){
  return this.quest.filter(function(element) {
      return !element.completed;
    })
}
Hero.prototype.viewCompleteTasks = function(){
  return this.quest.filter(function(element){
    return element.completed;
  })
}


module.exports = Hero;
