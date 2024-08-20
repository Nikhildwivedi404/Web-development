// let obj={
//     name:"nikhil",
//     // "full name": "nikhil dwivedi"
//     age:21,
//     weight:78,
//     height:"5ft 4in",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }

// };

// for(let key in obj){
//     console.log(key," ",obj[key]);
//}

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// let obj2 =obj;

//Creation of arrays
// let arr = [1, 2, 3, 4, 5];
// //arrya constructor
// let brr = new Array ('nikhil',100,true);
// brr.push('dwivedi');
// brr.pop();


// brr.shift();
// brr.unshift('nikhil dwivedi');
// brr.push(20);
// brr.push(40);
// brr.push(70);

//console.log(brr.slice(2,4));
 
// brr.splice(1,2,'arya');
// brr.splice(1,0,'arya');

//console.log(brr);
// console.log(brr);

// console.log(typeof(arr));


// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number)=>{
//     return number%2 ===0;

//     // if(number%2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });

// console.log(evenArray)

// let arr = [10,20,30];

// arr.map((number,index)=>{
//    console.log(number);
//    console.log(index);
// })

// arr.map((number)=>{
//     console.log(number+1);
// })

//  let ansArray = arr.map((number)=> {
//     return number*number;
//  })

//  console.log(ansArray )



// let arr = [1,2,'nikhil','arya',null];

// let ans = arr.filter((value)=> {
//     // if(typeof(value) == 'string') {
//         if(typeof(value) == 'number') {

//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);



// let arr = [ 10,20,30,40];

// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;
// },0);

// console.log(ans);



// let arr = [9,1,7,4,2,8];
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(9));



// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: ",length);
// // tradiotional loop

// for(let index =0;index < length; index++){
//     console.log(arr[index]);
//     }

// arr.forEach((value,index)=>{
//     console.log("number:",value,"Index:",index);
// })



// let arr = [10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// let fullName ="nikhil";

// for(let val of fullName){
//     console.log(val);
// }


let arr = [10,20,30,40,50];

function getSum(arr){
    let sum = 0;
    arr.forEach((value) =>{
        sum = sum + value;
    })
    return sum;
    // let len = arr.length;
    // let sum =0;
    // for (let index=0; index<len; index++){
    //     sum = sum + arr [index];
    // }

    // return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);