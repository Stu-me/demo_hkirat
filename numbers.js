const score = 200;
console.log(score);
 
// another way 
const balance = new Number(199);
console.log(balance);
// inbuilt functions

console.log(balance.toString().length);
console.log(balance.toFixed(5));
console.log(balance.toPrecision(3));
console.log(balance.toExponential(3,2));
let otherNum = 34.45555;
console.log(otherNum.toPrecision(3)); 
let  numberSystem  = 1000000000000000;
console.log(numberSystem.toLocaleString());
// convering it into indian number systems;
console.log(numberSystem.toLocaleString('en-IN'));
console.log(Math.max(34,434,534,3,34,545,34,43,345,4563,424,5));

console.log(Math.ceil(4.1)); // if more than x integer than make it x+1
console.log(Math.floor(4.9));
//  ***************** vvi******************** //
let num = Math.random();// gives random num btw 0 to 1
console.log(num);
console.log(Math.random()*10) // 0 to 9
console.log(Math.floor(Math.random()*10)) // to eliminate decimal

// now if we want it in certain range we can just + min value
let mini = 30; // nubmers from 30 and onwards
console.log(Math.floor(Math.random()*10)+mini);
console.log(Math.floor(Math.random()*10)+mini);
console.log(Math.floor(Math.random()*10)+mini);
console.log(Math.floor(Math.random()*10)+mini);
console.log(Math.floor(Math.random()*10)+mini);
let maxi = 60; // we want numbers between 30 to 50
console.log("HERE WE GO AFTER  30 to 60 ") //AND UNLIKE THIS TIME WE GET BROADER VALUES 
console.log(Math.floor(Math.random()*(maxi - mini+1))+mini);
console.log(Math.floor(Math.random()*(maxi - mini+1))+mini);
console.log(Math.floor(Math.random()*(maxi - mini+1))+mini);
console.log(Math.floor(Math.random()*(maxi - mini+1))+mini);
console.log(Math.floor(Math.random()*(maxi - mini+1))+mini);
// by doing maxi - min we know that if mini was 0 and we have 
// range so now we have value b/w 0 to range 
// adding it min will throw the value inside the mini
// but its is in the range so it will not cross the max also