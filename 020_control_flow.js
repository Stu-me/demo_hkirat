let month = 3
switch(month){
    case 1:
        console.log("hell yeah");
    case 2:
        console.log("this is not what i imagined");
    case 3:
        console.log("fuck this shit ");
    case 4:
        console.log("well what worse it can get");
    default:
        console.log("ab kuch na ho skee hai ");
    // sift +alt +  down arrow = copies the text and puts it down
    
    // should have used break
}
// *********** Boolean values that are -

// false values =
//             { false ,0,-0,BigInt 0n,"" - empty string ,null ,undefined,Nan}
// true values = 
//             {true, "0","false",'false ,'0'," ", [] - empty array , {} - empty object,function(){} - empty fucn - suprising  }


/***** how to check if the object is empty ******/
const emptyObj={}
if(Object.keys(emptyObj).length === 0){
   console.log(" yes , this is empty");
      
}


/******* Nullish Coalescing operator(??)********/

// check null ,undefined 