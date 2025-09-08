/* 
    IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
    ~ we want to immediately execute the function 
    ~ also we want it not to pollute the code 
      with the global variabels
    ~ so calling the function  just after declaring 
    would not help
*/


/******** we make a name less function and call it (func{})() **********/


// syntax to make iife 

(function dbConnect(){
    console.log("connected")
})();
// the error occured because js ko pta nhi ki iife ka 
// contex rokna kha so ; is must at the end of iife fucn
(function dbDisconnect(){
    console.log("disconnected");
})();