//Node.js Events - https://www.w3schools.com/nodejs/nodejs_events.asp

// Every action on a computer is an event. Like when a connection is made or a file is opened.

const events = require('events')
const eventEmitter = new events.EventEmitter();

const eventHandler = function(){
	console.log("I hear a scream");
}

eventEmitter.on('scream',eventHandler);

eventEmitter.emit('scream');