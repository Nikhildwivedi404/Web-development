//compiler time error

// syntax error
// // console.log(1;


// Runtime error
// //Reference error
// console.log(x);

// try{
//     Console.log("try block ends here");
//     console.log(x);
//     console.log("try block ends here")
//     //a

//     //b
    
//     //c
// }
// catch(e){
//     //define krte h, error k sath aap kya krna chahte h
//     //retry logic
//     //fallback mechanism
//     //custom error
//     console.log("I Am INSIDE CATCH BLOCK");
//     console.log("Your error is here:",e);
// }

// finally{
//     console.log("I will run everytime, as i am finally block")
// }





// try{
//     //Reference error
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai pehile declare karo, fer print karna");

// }


let errorCode = 100;
if(errorCode ==100){
    throw new Error("Invalid Json");
}