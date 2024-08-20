// for(let i=1; i<=10; i++){
//     console.log("nikhil")
// }

// for(let i=1; i<=5; i++){
//     console.log(i);
// }


// for(let i=5;i>0;i--){
//     console.log(i);

// }

// for (let i=1;i<=6;i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// for (let i =1; i<=4; i++){
//     if(i==3)
//         continue;
//     else
//         console.log(i);
// }

// let i=1;
// while(i<=10){
//     console.log("nikhil");
//     i++;
// }

// let i=1;
// while(i<6){
//     console.log(i);
//     i++;
// }

// let i=5;
// while(i>0){
//     console.log(i);
//     i--;
// }  


// let i = 1;
// while(i < 5){
//     console.log("Inside the loop")
//     if(i==3){
//         i++;
//         continue;
//     }

       
//     else
//         console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log("nikhil");
//     //updation
//     i++;
// }
// while(i<=10);

// let i=1;
// do{
//     console.log(i);
//     //updation
//     i++;
// } while(i<6);/

// let i = 5;
// do{
//     console.log(i)
//     //updation
//     i--
// }while(i>0);


// let firstName ="nikhil";
// let lastName ='dwivedi';

// let name = `nikhil
// dwivedi this is
// my
// name
// hii`;

// console.log(name);

// let firstName = new String("nikhil dwivedi");
// console.log(firstName);



// let op1 ='English ';
// let op2 ='HINDI ';

// console.log(op1.length);
// console.log(op2.length);

// let finalAns=`op1 + op2`;
// let finalAns =`${op1}${op2}`;
// console.log(finalAns)

// let ans = op1 + op2;
// console.log(ans);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


// let str ="nikhil";
// console.log(str.substring(2,4));
// console.log(str.substring(2));


// let sentence = "Hello jee kaise ho sare"; 

// let sentence = "Hello jee \"kaise\" ho sare"; 
// console.log(sentence)


let sentence = "Hello \\Jee \\Kaise \\ho \\Sare";

let words = sentence.split('\\');

console.log(words);

console.log(words.join('_'));
// console.log(words.join(','));