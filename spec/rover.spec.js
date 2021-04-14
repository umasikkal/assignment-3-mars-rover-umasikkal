const asserrt = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');
const { assert } = require('console');
describe("Rover class", function() {

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.




  // 7 tests here!
it("constructor sets position and default values for mode and generatorWatts", function(){
  let input = 12000;
  let mode = "NORMAL";
  let generatorWatts = 110;
  let output = new Rover(12000);
  assert.strictEqual(output.position, input);
  assert.strictEqual(output.mode,'mode');
  assert.strictEqual(output.generatorWatts,generatorWatts);
});

it("response returned by receiveMessage contains name of message",function(){
  let input = 'e1';

  let rover = new Rover(98382);
  let message = new Message( "e1");
  let response= rover.receiveMessage(message);
  assert.strictEqual(response.message.name, input);
});

it("responds returned by receiveMessage includes two results, if two commands are sent in message",function(){
  let input =2
  let rover = new Rover(98382);
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),
                  new Command('STATUS_CHECK')];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);
  assert.strictEqual(response.results.lengths,input)
  
});

it("responds correctly to status check", function(){
  let input = true;
  let input1 = 'NORMAL';
  let input2 = 110;
  let input3 = 98382;

  let rover = new Rover(98382);
  let commands = [ new Command('STATUS_CHECK')];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(response.results[0].completed,input);
  assert.strictEqual(response.results[0].mode,input1);
  assert.strictEqual(response.results[0].generatorWatts,input2);
  assert.strictEqual(response.results[0].position,input3);

});

it("responds with correct status after MODE_CHANGE",function(){
  let input = true;
  let input1 = "LOW_POWER";
  let rover = new Rover(98382);

  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(response.results[0].completed,input);
  assert.strictEqual(response,results[0].mode,input1);

});

it("responds with false completed value, if attempt to move while in LOW_POWER mode",
function() {
  const rover = new Rover(11000);
  const commands = [
    new Command('MODE_CHANGE', 'LOW_POWER'),
    new Command('MOVE',87382098)
  ];
  const message = new Message("move_fails",commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(response.results[1].completed,false);
  assert.strictEqual(response.results)[1].position,(11000);
});

it("responds with position for move commans", function(){
  let input = 12000;

  let rover = new Rover(98382);
  let commands = [new Command('MOVE',12000)];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(response.results[0].position,input);
});

it("Bonus",function(){
  let input = false;
  let input1 = 'Unknown Command'

  let roverr = new Rover(983802);
  let commands = [new Command('UNKNOWN', 12000)];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(respone.results[0].completed,input);
  assert.strictEqual(response.results[0].message,input1);

});
});




