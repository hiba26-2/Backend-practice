const EventEmitter=require('events')

const Logger=require('./logger');
const logger=new Logger();

//Register a listner
logger.on('messageLogged',(arg)=>{
    console.log('Listner called', arg);
});

//Raise an event


//emitter.on('logging',(arg)=>{
//console.log(arg);
//})

//emitter.emit('logging',"message")

logger.log('message')