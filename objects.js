// two ways to create objects 1)constructor 2)literal

// objects.create() - constructor way or singeleton

const jsUser = {}; // bn gyl tohaar object by literal way

const jsUser2 = {
    name : "Sundram kumar",
    college: "Markham college of Commerce",
    semester : 4,
    "sports": "kabbadi",
    married: false,
    workingDay :["monday","wednesday","friday"]
}
// two ways to access object elements
console.log(jsUser2.name); // mostly used
console.log(jsUser2["name"]);// the second method is used symbol
                          // or as an alternate  
console.log(jsUser2.sports);
console.log(jsUser2["sports"]);
jsUser2.name = "baggha"
// Object.freeze(jsUser2); // no values will change
// jsUser2.college = "annnd bhaat college";
console.log(jsUser2)


// functions for the object 
jsUser2.greeting = function(){
    console.log(`So we introduce you the ${this.name} , currently he is in ${this.college}`)
}
jsUser2.greeting();
