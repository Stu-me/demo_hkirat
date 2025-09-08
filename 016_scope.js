let a = 345;
if(true){
    // console.log(a);
    let a =234;// if same name variable is declared
     // than local variable dominates but not then its 
     // global time 
    console.log(a);
}
console.log(a);
// **************** two ways to declare functions*******
console.log(addfive(15));
// console.log(addten(5)); // ye kaa, nhi krega
//  this is called function hosting 
function addfive(num){
    return num+5;
}
const addten = function(num){
    return num+10;
}
console.log(addfive(10));

console.log(addten(10))
