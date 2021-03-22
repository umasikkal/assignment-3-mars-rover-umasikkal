const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
it("constructor sets position and default values for mode and generatorWatts", function(){
  let input = 12000;
  let position = 87382098;
  let rover = new Rover (position); 
  let mode = "NORMAL";
  let generatorWatts = 110;
  let output = new Rover (12000);
  assert.strictEqual(rover.position, input);
  assert.strictEqual(rover.mode,'mode');
  assert.strictEqual(rover.generatorWatts,generatorWatts);
});

it("response returned by receiveMessage contains name of message",function(){
  let input = 'e1';

  let rover = new Rover(87382098);
  let message = new Message( "e1");
  let response= rover.receiveMessage(message);
  assert.strictEqual(response.message.name, input);
});

it("response returned by receiveMessage includes two results, if two commands are sent in message", function(){
  let input =2
  let message = new Message('e1', commands);
  let rover = new Rover(87382098);
  let response = rover.receiveMessage(message);
  assret.strictEqual(response.results.length,input);

});

it("response correctly to status check", function(){
  let input  = true;
  let input1 = 'NORMAL';
  let input2 = 110;
  let input3 =87382098;

  let rover = new Rover (87382098);
  let commands = [ new Command('STATUS_CHECK')];
  let message = new Message('e1',commands);
  let response = rover.receiveMessage(message);

  assert.strictEqual(response.results[0].completed,input);
  assert.strictEqual(response.results[0].mode,input1);
  assert.strictEqual(response.results[0].generatorWatts,input3);

});

it("responds with correct status after MODE_CHANGE",function(){
  let input = true ;
  let input1 = "LOW_POWER";
  let rover = new Rover(87382098);

  let commands = [new Command('MODE_CHANGE', 'LOw_POWER')];
  let message = new Message('e1',commands);
  let response =rover.receiveMessage(message);

  assert.strictEqual(response.results[0].completed,input);
  assert.strictEqual(response.results[0].mode,input1);

});

it("responds with false completed value when attempting to move while in LOw_POWER mode", function(){
  const rover = new Rover(11000);
  const commands = [
    new Command('MODE_CHANGE', 'LOw_POWER'),
    new Command('MOVE', 87382098)
  ];
  const message = new Message("move_fails", commands);
  let response =rover. receiveMessage(message);

  assert.strictEqual(response.results[1].completed,false);
  assert.strictEqual(response.results[1].position, 11000)
});

it("responds with position for move command", function(){

let rover = new Rover(87382098);
let commands = [new Command('MOVE',20)];
let message = new Message('e1',commands);
let response = rover.receiveMessage(message);

assert.strictEqual(response.results[0].position,input);
});
});
