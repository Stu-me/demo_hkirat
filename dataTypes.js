"use strict"; // treat all the js code in this program as newer version 
// which means that we can use class , object , module etc
// "now" -- use strict is their by default
let num = 32;
let strNum = String(32);
console.log(strNum);
console.log(typeof(strNum));
// conversion ke liye start ka letter bada aur puta dataype ka name ke under value lena hai
// eg Number , String , Boolean ,Null ,Undefined,
// Nan = not a number
var num1 = "45"
let num2 = "45aa";
 let convNum = Number(num2);
 console.log(convNum);
 console.log(typeof(convNum));
 //**********************************************************this are some basic**********************************/
// *********************** some operations *********************************
var num1 = 34; // using var provide no safety to the  variable name thats why use let 
let negNum = - num1;
console.log(negNum);
//  (** - gives power)
function powFinder(a,b){
    console.log(a**b);
}
powFinder(5,3);
console.log(50**3);
// comparison is boolean like cpp
console.log(3>2);
console.log(34>100);
let symbi = Symbol('123');
let symbi2 = Symbol('123');
console.log(symbi === symbi2); // as far as i get it is used to verify if both are have same symbols 
// to create object - anything in the {}
let obj = {
    stName:"Baba tyagi",
    stCaste : "takur",
    stHeight : 3.5
}
console.log(obj.stName);