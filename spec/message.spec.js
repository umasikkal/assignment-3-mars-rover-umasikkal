const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter ", function() {
   assert.throws(
     function() {
       new Message();
     },
     {
       message: 'Message name required.'
     },
   );
    });

  it("constructor sets name", function() {
    let message = new Message('New message!');
    assert.strictEqual(message.name, 'New message!');
  });

  it("contains  commands array passed into the constructor as 2nd argument", function() {
    let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
    let message = new Message('Another message', "commands");
    
    assert.strictEqual(message.commands,commands);
  });

});
