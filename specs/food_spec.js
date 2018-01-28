const assert = require('assert');
const Food = require('../food.js');

describe('Food', function(){
  let food;

  beforeEach(function(){
    food = new Food("Space Carrots", 20);
  })

  it('can start with name and replenishment value', function(){
    assert.strictEqual(food.name, "Space Carrots");
    assert.strictEqual(food.replenishment, 20);
    assert.strictEqual(food.poisonous, false);
  })
  it('can become toxic', function(){
    food.contaminate();
    assert.strictEqual(food.poisonous, true);
  })


})
