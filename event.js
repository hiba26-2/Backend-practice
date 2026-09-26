const EventEmitter=require('events')
const emitter=new EventEmitter();

//Register a listner
emitter.on('messageLogged',(arg)=>{
    console.log('Listner called', arg);
});

//Raise an event
emitter.emit('messageLogged',{id:1, url :'http://'});

emitter.on('logging',(arg)=>{
console.log(arg);
})

emitter.emit('logging',"message")