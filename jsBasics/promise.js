/******************** promises  *******************/ 
//~ we need them to make certain works after the async operation 
//~ without promise it will be hard to make operation just after the 
// ~ compeletion of that async program

/** also for better readability! lets fuckin go and do some promises **/

const NameAnyting = new Promise( (ressolve,rejeect)=>{
    // resolve = first one , reject = second one 
    // needed to call to act on function after the promise
    setTimeout(()=>{
        console.log("the new project started");
        ressolve();
        rejeect("not interested");
    },1000)
});
console.log("when out of the promise this is what happens no control over flow");

 NameAnyting.then(function(){
     console.log(" workers dispatched ");
 })
NameAnyting.catch(function(error){
    console.log("erro" + error);
})