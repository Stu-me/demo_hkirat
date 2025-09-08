/* we are here to perform the operation */
const arr = [23,45,67,88,9,65,34,23,5,7,8,98];
let filterArr = arr.filter((val)=>val>40);
console.log(filterArr);

let filterArr2 = arr.filter((val) =>{
    // ab return use krne pdega kiu ki  { } scope ke atte hii ye 
    // function bn gya toh function hamesha return krta hai
    let temp = 1000;
    if(val>40) temp += val; // will not work RESEARCH MORE 
    return temp;
})
console.log(filterArr);

let changeValues = arr.map((num) => num+1); // to map or say change 
                                   // values
console.log(changeValues);
 

/********************* chaining *************************/


 // USING MORE THAN ONE METHOD DIRECTLY AND ONE AFTER THE OTHER 

 const classMarks = [189,188,190,167,187,165,178,156,178,134,123,156,178,145,134,123];
 const percentageOfMarks = classMarks
                                    .map((num) => num/200)
                                    .map((val) =>  val*100)
                                    .filter((val) => val>50)
                                    .map((num) => num+"%")
console.log(percentageOfMarks);

