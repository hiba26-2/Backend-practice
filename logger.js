const EventEmitter=require('events')

var url='http://mylogger.io/log';

class Logger extends EventEmitter{
 log(message){
    //send an http request
    console.log(message)
    //Raise an event
this.emit('messageLogged',{id:1, url :'http://'});
}
}

//define a module
//module.exports.log=log; but bacause its a single function

module.exports=Logger;
//Its not an object now
//To export the log method, the name exported in the one on the rightside, it can vary
//modules are private