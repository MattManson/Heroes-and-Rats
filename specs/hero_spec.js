const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');


describe('Hero', function(){
  let hero;
  let food;
  let favouriteFood;
  let toughTask;
  let simpleTask;
  let mediumTask;
  let rat;

  beforeEach(function(){
    hero = new Hero("Bucky O'Hare", 100, "Space Carrots");
    favouriteFood = new Food ("Space Carrots", 30);
    food = new Food("sammich", 20);
    toughTask = new Task(10, 10, "lots of money");
    simpleTask = new Task(3, 1, "a firm handshake");
    mediumTask = new Task(6, 6, "a pint");
    rat = new Rat();
  })

  it('can get hero name, health, favourite food', function(){
    assert.strictEqual(hero.health, 100);
    assert.strictEqual(hero.name, "Bucky O'Hare");
    assert.strictEqual(hero.favFood, "Space Carrots");
  })
  it('can talk', function(){
    assert.strictEqual(hero.talk(), "That's CAPTAIN Bucky O'Hare to you!")
  })
  it('has empty quest at start', function(){
    assert.strictEqual(hero.quest.length, 0);
  })
  it('can eat', function(){
    hero.eat(food);
    assert.strictEqual(hero.health, 120);
  })
  it('can check fav food', function(){
    assert.strictEqual(hero.checkFavFood(favouriteFood), true);
  })
  it('can add task to quest', function(){
    hero.addTask(toughTask);
    hero.addTask(simpleTask);
    assert.strictEqual(hero.quest.length, 2);
  })
  it('can sort by difficulty', function(){
    hero.addTask(mediumTask);
    hero.addTask(simpleTask);
    hero.addTask(toughTask);
    assert.deepEqual(hero.sortTaskDifficulty(), [toughTask, mediumTask, simpleTask])
  })
  it('can sort by urgency', function(){
    hero.addTask(mediumTask);
    hero.addTask(simpleTask);
    hero.addTask(toughTask);
    assert.deepEqual(hero.sortTaskUrgency(), [toughTask, mediumTask, simpleTask])
  })
  it('Can view incomplete tasks', function() {
    hero.addTask(mediumTask);
    hero.addTask(simpleTask);
    hero.addTask(toughTask);
    toughTask.markComplete();
    assert.deepEqual(hero.viewIncompleteTasks(), [mediumTask, simpleTask]);
  })
  it('Can view complete tasks', function() {
    hero.addTask(mediumTask);
    hero.addTask(simpleTask);
    hero.addTask(toughTask);
    toughTask.markComplete();
    assert.deepEqual(hero.viewCompleteTasks(), [toughTask]);
  })
  it('can lose health from contaminated food', function(){
    rat.snaffle(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 80);
  })
})
