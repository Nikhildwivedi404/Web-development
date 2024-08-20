// let obj ={
//     age :12,
//     wt:68,
//     ht:180
// };

// console.log(obj);

// obj.color = "white";

// console.log(obj);



// let src ={
//     age :12,
//     wt:68,
//     ht:180
// };

// let dest ={...src};
// // let dest = src;

// src.age = 60;

// console.log("src: ", src);
// console.log("dest: ", dest);



// let src ={
//     age :12,
//     wt:68,
//     ht:180
// };

// let src2 ={
//     value:101,
//     name:"nikhil"
// }

// let dest = Object.assign({},src, src2);
// // let dest = src;

// src.age = 60;

// console.log("src: ", src);
// console.log("dest: ", dest);






let src ={
    age :12,
    wt:68,
    ht:180
};

let dest = {};
//cloning using iteration
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest [newKey] = newValue;
}
 
src.age = 80;


 console.log("src: ", src);
 console.log("dest: ", dest);