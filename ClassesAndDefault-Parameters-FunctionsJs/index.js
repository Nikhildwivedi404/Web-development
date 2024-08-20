



function getAge(){
    return 190;
}

function utility(name = "nikhil", age = getAge()){
    console.log(name," ", age);
}
utility();







// function solve(value){
    // function solve(value = {age:15,wt:90, ht:190}){
//         function solve(value = ["nikhil","dwivedi","arya"]){
//     console.log("HELLO",value);
// }
// solve();
// solve("nikhil");







// function sayName(myName ="write her"){
//     console.log("my Name is: ",myName);

// function sayName(fName ="frind",lName = "normal"){
//     console.log("my Name is: ",fName," ",lName);
// }

// sayName();

// function sayName(fName ="frind",lName = fName.toUpperCase()){
//     console.log("my Name is: ",fName," ",lName);
// }
// sayName("nikhil");

//  sayName("nikhil","dwivedi");


 
// class Human {
//     //properties
//     // age = 13;// public
//     age;
//     #wt = 80; //private
//     ht = 180;

//     // constructor (newAge,newHeight){
//         constructor(newAge,newHeight,newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     //behaviour

//     walking (){
//         console.log("I am Walking", this.#wt);

//     }

//     running() {
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt = val;
//     }

// }

// // let obj = new Human();
// // console.log(obj.age);


// let obj = new Human(50,190,101);
// console.log(obj.fetchWeight);

// obj.walking();