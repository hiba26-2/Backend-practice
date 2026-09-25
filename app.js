const logger= require('./logger')
//same folder,using relative path
//use const-best practice,so as not to change it accidentally
//require function used to load module
//the arguments are the name or path of the targert module to be loaded
//define a variable and set its value to the value of the returned value of the module
console.log(logger)
//when run, gets a single method "log"
logger.log('message')
//call the log function from the module logger(the module name and varable assigned is the same this time)

//We can use jshint app.js(to get accidental overwritting errors at compile time, if we didnt use const)