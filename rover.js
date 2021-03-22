class Rover {
   // Write code here!
   constructor(position) {
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
     this.position = position;
   }
   receiveMessage(message){

let results = [];
let result;
if (message.commands){
  for ( let i =0; i < message.commands.length; i++) {

    if(message.commands[i].commandType === 'MOVE'){
      result = this.updatePosition(message.commands[i].value)
    }
    else if (message.commands[i].commandType === 'MODE_CHANGE'){
      result = this.modeChange(message.commands[i].value)
  }
  else if (message.commands[i].commandType === 'STATUS_CHECK'){
    result = this.statusCheck(message.commands[i].value)
}
  else {
  this.completed = false;
  result = {completed    : this.completed ,
            message      : 'Unknown Command'
             }
            }          
  results.push(result);
  }
  
}

return { message,  results}

}
updatePosition(value){
  if (this.mode === 'LOW_POWER'){
    this.completed = false;
   } else{
     this.position  = value;
     this.completed = true;
     }
    return { completed : this.completed,
            position    :this.position
     }
}
modeChange(value){
  this.mode = value;
  this.completed = true;
  return { completed : this.completed,
           mode       : this.mode
           }
  }
  statusCheck(){
    this.completed = true;
    return { completed  : this.completed ,
             mode       : this.mode,
             generatorWatts: this.generatorWatts ,
             position   : this.position

    }
}
}
module.exports = Rover;