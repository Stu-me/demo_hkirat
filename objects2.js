const tinderUser ={};// made an empty object
tinderUser.id = "12334"; // created a new element in the tinderUser as id
tinderUser.name = "samay raina"
tinderUser.status = "single"
// console.log(tinderUser);
// console.log(tinderUser.status); // going more precise

let regUser = { // we can use obj inside the obj too
    name:{
        nickName:"banti",
        official:{
            firsName: "banda",
            lastName:"bhadhuur",
            middleName:"singh"
        },
        codeName:"agent binod"
    },
    gender:"identifies as an complete asshole",
    caste:"he only cast his shadows",
    intro:"you merly adopted the dark but he is dark(colored)",
    working:false
}
// console.log(regUser);
// console.log(regUser.intro, regUser.name);
// console.log(regUser.name.official.middleName);
 
const obj1 = {
    name1:"paparazzzi",
    job1:"celebrities ke tatee chatna",
    market:"ja dekhe waha hum"
}
const obj2 = {
    name:"dhanush",
    job:"kabootar trainer",
    nerworth2:4
}
 //  now how to merger two objs 
//  const obj3 = Object.assign({},obj1,obj2); // {} optional 
//                                   // but common in production
// console.log(obj3);

// most common and easy way i.e spread way
let obj3 = {...obj1,...obj2};
console.log(obj3);

/********************** keys and values specially useful when the information comming from db *****************************/
console.log(Object.keys(obj1));
console.log(Object.values(obj3));
 // gives all the keys and valuels
/************** object destructuring ********/

// syntaxtical sugar used in production 
school = {
    schoolName :"anggad badi",
    schoolBoard : "jac",
    schoolStrength : 1249
}
console.log(school.schoolBoard)
// ye jaise naming complex hoga ye bhut kharab hotee jayega
/*********** better way ***********/
const {schoolStrength} = school;
console.log(schoolStrength); // cleaner as no .
// more option
// const {schoolStrength} = school; error as already declared
const {schoolStrength:strng} = school;
console.log(strng);
