const Command = require('./command.js');
   // Write code here!
  class Message {
    constructor(name,commands) {
      this.name = name;
      if (!name) {
        throw Error ("Name required");
    }
    this.commands = commands;
  }

  }

module.exports = Message;