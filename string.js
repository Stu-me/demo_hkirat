let stuName = "Sundram paji";
let country = "gorgeia";
// concatenation 
console.log(stuName + " belongs to  " + country); // bad practise not used in production
// the following is a good practise 
console.log(`Myself ${stuName} I am from cannda and i will love to work in ${country}`); 
 // good way `******${variable } **** so on `

 // declaring string can be done one other way too , by wrapping in the object

let Name = new String(" not bad not bad "); // not used in production 

console.log(Name);

//console.log(Name.__proto__);
console.log(Name.toUpperCase());
console.log(stuName.toUpperCase());
console.log(Name,stuName);

