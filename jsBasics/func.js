function check(marks){
    if(marks>500) console.log("chottii bachiii ho kya");
    if(marks<250) cout();
    else if(marks<=350) warn();
    else if(marks<=400) soClose();
    else if(marks>400) congrats();
}
function cout(){
    console.log("YOU ARE REJECTED , WHO THE FUCK HAS SUCH A LOW MARKS");
}
function warn(){
    console.log("YOU COULD HAVE MADE IT TRY NEXT YEAR");
}
function soClose(){
    console.log(" SO CLOSE YET SO FAR");
}
function congrats(){
    console.log("WE WELCOME YOU TO HOGWARTS");
}
function main(){
    console.log("we are gonna write some functions to find something new");
    console.log(" we are writing a js program to respond to users marks input");
    let marks = 366;
    check(marks);
}
main();
let currDate = new Date();
console.log(currDate.getDay());
console.log(currDate.getFullYear());
console.log(currDate.getHours());
console.log(currDate.getMinutes());
console.log("NOW THE TIMER STARTS");
function clock(){
    console.log(new Date().getHours(), new Date().getMinutes(),new Date().getSeconds());
}
setInterval(clock,1000);
