    // /******* now we know how to use the promise, now we will focus on cleaner code  ********/

    // const joinigLetter = new Promise((selection,rejection)=>{
    //     console.log("Your joining letter process has started");
    //     setTimeout(()=>{
    //     // console.log("We have your results");
    //         //selection("Welcome to the team");
    //         rejection("winners takes it all losers has to fall");           
    //     },3000)
    // })
    // joinigLetter.then(()=>console.log("welcome to the team"))
    //             .catch(error =>console.log("if you are not able to come in 2 days forget the offer " + error));


// another making of promise 

const Farewell = new  Promise ((resolve,reject) => {
    console.log(" step 1 = this is to declare the farewell of the class");
    setTimeout(()=>{
        console.log("step 2 = here is the result");
        reject(" step 3 dates extended")
    },5000)}).
             catch((error)=>console.log("step 4 - dates extended"+error))
