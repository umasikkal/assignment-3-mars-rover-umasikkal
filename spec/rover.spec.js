const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');


// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
describe("Rover class", function() {



  // 7 tests here!
it("constructor sets position and default values for mode and generatorWatts", function(){
  expect( function() { new Rover();}).toThrow(new Error('Rover position required.'));

it("response returned by receiveMessage contains name of message",function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let Message = new Message("New message!", commands);
  let rover =new Rover(100);
  let response = rover.receiveMessage(Message);
  expect(response.message).toEqual("New message!"); 
});

it("responds returned by receiveMessage includes two results, if two commands are sent in message",function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message= new Message('Test message with two commands', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(commands.length);
});

it("responds correctly to status check command", function(){
  let commands= [new Command('STATUS_CHECK')];
  let message = new Message('Rover check status', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  let roverInfo = {mode: (rover.mode), generatorWatts: (rover.generatorWatts), position: (rover.position)};
  expect(response.results[0].roverStatus).toEqual(roverInfo);
});
  
  it("responds correctly to mode change command",function() {
  let commands = [ new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('changing mode to LOW_POWER',commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(rover.mode).toEqual ('LOW_POWER');
});


it("responds with false completed value, when attempting to move while in LOW_POWER mode",
function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'),new Command('MOVE', 2000)];
  let message = new Message('Can not move while at LOW_POWER mode', commands);
  let rover =new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[1]).toEqual({completed:false});
});

it("responds with position for move commans", function(){
  let commands =[new Command('MOVE',2000)];
  let message = new Message('Moving to position 2000',commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(rover.position).toEqual(2000);
});

});
  
});

