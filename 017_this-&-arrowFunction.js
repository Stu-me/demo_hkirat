/********* this function in object      ********/

const obj1= {
    name:"sundram",
    class :3,
    standard:"high",
    score:98,
    welcome:function(){
        console.log(`Myself ${this.name} and now you can have the information about me `);
        // console.log(this); having all the ele of the object
            
    },
    warn:console.log(`it will be a matter of time that you would beg for your life`)    
}
 // inside this is used to identify the local variable
 obj1.warn;
 obj1.welcome();
//  console.log(this); 


//  ****************  now for  function  *************
function testing(){
  // console.log(this);
}
testing();
const test = function (){
    let username = "sanddy"
    console.log(this.username); 
    console.log("idhar pta chlta hai ki this function mein kaam na kre hai "); 
}
test();
/************* arrow function  **************/

// ()=> this arrow func declaration
// we store it in any variable name 

// const arrowFucn = (num1,num2,num3) => {
//     return num1+num2+num3;
// }
// console.log(arrowFucn(3,5,7,));


// or

const arrowFucn = (num1,num2,num3) => (num1+num2+num3);
console.log(arrowFucn(2,4,6));

// jab bhi {} ayega tab return lekhna pdega 

// when we have to retuen object using the last method
// {} - this is object

// const printObj = (num1) =>{"sundram"};
// console.log(printObj(7)); wrong way 

const printObj = (num1) =>({name:"sundram"});// objects are created with key and value
console.log(printObj());


