/* 
    ~ arrays in java script 
    ~ properties of arrays in javascript
    ~ declaration = let arr = [val1,val2,val3,val4...............]
    ~ 0 based indexing 
    ~ dynamic ,i.e values can be added and removed
    ~ ** can store any type of the values eg let arr = ["sundram",bca , 33 ,highasf]
    ~ shallow copy i.e when given to other its address or reference type 
      when given to other one changing the value results in the change of original
    
*/
 let arr = [23,445,34,23,354,45,"suprise suprise mf the king is back"];
 console.log(arr[7]);
 arr.push("yo yo your are fired");
 console.log(arr[7])


 // slice and splice 
let arr1 = [0,1,2,3,4,5,6,7,8,9,0];
console.log("slice "+arr1.slice(3,5));
console.log("array after slice "+arr1);
console.log("splice " + arr1.splice(3,2));
console.log("array after splice "+arr1);


 // so , slice copies the part of for the given index 
     // the eg(0,5) 0 ,1,2,3,4 upto index 4 not 5

// but splice takes out the value from the array or say alter it 
// also the we mention index and how many elements


let class1 =["sashi","elon","systevke","sam altman"];
let class2 = ["tom brady","tony","hela","alska"];
let school = [...class1,...class2]; // both merged, 
 //** Important  idarr [] isilye use hua hai kiu ki array chiaye
 // ...obj/...arr etc is used to spred and collect 


console.log(school);
let arr2d = [1,2,[3,4,5],6,7,[8],9]; 


// to flatten or destroy all nested array and flatten in 


let flatarr = arr2d.flat(Infinity);
console.log(flatarr);   
console.log(Array.from("sundram kumar"));
console.log(Array.of(23,4,45,6));