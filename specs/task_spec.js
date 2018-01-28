const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){
  let task;

  beforeEach(function(){
    task = new Task(10, 10, "lots of Space Money")
  })

  it('at start can have difficulty, urgency, reward, incomplete', function(){
    assert.strictEqual(task.difficulty, 10);
    assert.strictEqual(task.urgency, 10);
    assert.strictEqual(task.reward, "lots of Space Money");
    assert.strictEqual(task.completed, false);
  })
  it('can be marked as complete', function(){
    task.markComplete();
    assert.strictEqual(task.completed, true);
  })


})
