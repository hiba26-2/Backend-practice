var url='http://mylogger.io/log';
function log(message){
    //send an http request
    console.log(message)
}
//define a module
//module.exports.log=log; but bacause its a single function

module.exports=log;
//Its not an object now
//To export the log method, the name exported in the one on the rightside, it can vary
//