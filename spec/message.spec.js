const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor ", function() {
   assert.throws(
     function() {
       new Message();
     },
     {
       message: 'Name required'
     },
   );
    });

  it("constructor sets name", function() {
    let input = "Constructor Name";
    let output = new Message("Constructor Name", "command1");

    assert.strictEqual(output.name,input);
  }); 

  it("contains  commands passed into the constructor as 2nd argument", function() {
    let input = "command1";
    let output = new Message("Constructor Name", "command1");
    
    assert.strictEqual(output.commands,input);
  });

});
