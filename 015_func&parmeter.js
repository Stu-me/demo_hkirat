console.log("to take any number  input as many numbers of arguments ");

function Addthem(val1,val2,...nums1){
    console.log(val1,val2);
    // this varibales will take rest will be given to  rest(...)
    return nums1
}
console.log(Addthem(3,4,5,6));
console.log(Addthem());
console.log(Addthem(1,2));
console.log(Addthem(1,2,2,2,22,2,2,2,23,4,5,6));
