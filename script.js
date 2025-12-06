// let count = 0;
// for(let i= 1;i<15;i++){
//     if(i>8){
//         ++count;
//     }
// }
// console.log(count);


// 12>13 ? console.log("Hello"); : console.log("Hey");
// 10>5 ? console.log("True") : console.log("False");

// console.log(!true);

// test();

// function test(){
//     console.log("Hello")
// }

// let score = 40;

// score>35 ? console.log("Pass") : console.log("Fail");


// let day =9;
// switch(day){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");-1
//         break; 
//     default:
//         console.log("Default");           
// }


// for(let i = 1;i<21;i++){
//     console.log(i)
// }

// let num = prompt("Number bol");

// // if(Number(num) > 0){
// //     console.log("Positive")
// // }else{
// //     console.log("Negative");

// // }

// if(num.trim() === ""){
//     console.log('write')
// }else if(num === null){
//     console.log("Write smtg")
// }


// for(let i =1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }

// for(let i=0;i<4;i++){
//     let attempt = prompt("Password: ");
//     if()
// }

// let age = prompt("Enter your age:");

// if(age === null){
//     console.log("You cancelled it");
// }else if(age.trim() === ""){
//     console.log("Enter number not spaces");
// }else if(isNaN(Number(age))){
//     console.log("Enter correct number");
// }else if(Number(age)>18){
//     console.log("You are eligible");
// }else{
//     console.log("You are not eligible");
// }

// const password = "1234";

// let attempts = 0;

// while(attempts < 3){
//     let ans = prompt("Enter the Password");

//     if(ans === password){
//         alert = "Access granted";
//         break;
//     }else{
//         attempts++;
//         if(attempts < 3){
//             alert(`Wrong password you got ${3-attempts} tries`);
//         }
//     }
//     if(attempts === 3){
//         alert("Account Locked");
//     }
// }


// a();
// var a = function (){
//     console.log("HI")
// }

// function a(a,b,c,d){
//     console.log(a,b,c,d);
// }
// a(1,2,null,4);

// let global = 0 ;
// function impure(a){
//     global++;
//     console.log(a+global);
// }
// impure(2);


// function ab(obj){
//     console.log(obj);
// }

// ab({name:"Praneeth",age: 19});

// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val){
//     return val*val
// })
// console.log(newarr)


// let arrr = [1,2,3,4,5,6,7,8];
// let nesarr = arrr.filter(function(val){
//     return val%2 == 0
// })
// console.log(nesarr);

// let salary = [1000,2000,3000];

// let combined = salary.reduce(function(acc,val){
//     return acc+val
// },0)
// console.log(combined);

// let name = ["hari","om","sai","bhanu"];

// let ans = name.every(function(val){
//     return val.length>2;
// })
// console.log(ans);


// let user = {
//     name : "Bhanu",
//     age : 19,
//     email : "@g"
// };
// Object.seal(user);
// user.name = "Praneeth";

// var first = document.querySelector('.first');
// first.innerHTML = "Praneeth";

var a = Math.ceil(Math.random()*10);
console.log(a);

var change = document.querySelector('.change-btn');

change.addEventListener('click',function(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    box.innerHTML = `rgb(${c1},${c2},${c3})`;
})