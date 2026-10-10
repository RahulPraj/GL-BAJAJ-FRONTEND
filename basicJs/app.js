// console.log("heelooo");

// String
// let userName = "rahul";
// console.log("userName");
// console.log(userName);

//CONCATINATE
let firstName = "Rahul";
let lastName = "Prajapati";
// console.log(firstName+" "+lastName);
// console.log(`my name is ${firstName}`) 
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());
// console.log(firstName.length);
// let userName = "    raj   ";
// console.log(userName.trim())

// Number
// let a = 10;
// let b = -5;
// let c = 4.5;
// let d = 40/10;
// console.log(typeof(b));
// console.log(Math.PI);
// console.log(Math.sqrt(8));
// console.log(Math.min(5,10,2,8,20));
// console.log(Math.max(5,10,2,8,20));
// console.log(Math.ceil(10.3));
// console.log(Math.floor(10.6))
// let random = Math.random()*10;
// console.log(Math.floor(random));


//undefined
// let a = undefined
// console.log(a);

// diff btw == to ===

// let a = '1';
// let b = true;
// console.log(a==b);
// console.log(a===b);

// conditional
// let age = 20;
// if(age>=18 && age<=21){
//     console.log("allowed to join party but have soft drink");
// }else if(age >=22  && age <= 24){
//     console.log("allowed to a party and have hard drink")
// }else{
//     console.log("not allowed");
// }

// function
// function sum(a,b=5){
//     // console.log(a+b)
//     return(a+b);
// }
// let ans = sum(2,10);
// console.log(ans)

// first class function
// let add = function sum(a,b=5){
//     // console.log(a+b)
//     return(a+b);
// }
// console.log(sum(2,10))


// object
// let person = {
//     name:"rahul",
//     age:26,
//     location:"delhi",
//     isMale:true,
//     fun:function printDetail(){
//         console.log(`my name is ${this.name}`)
//     },
//     info:{
//        degree:"B-tech" 
//     }
// }
// console.log(person.age);

// person.name="Rahul"
// console.log(person);

// person.favColor = "white";
// console.log(person);

// delete person.age;
// console.log(person);

// console.log(person.fun())

// array
// let arr = [2,4,6,[10,true,"rahul"],"hello",undefined,null,true];
// console.log(arr[3][2])


//loop
//for-of
// let arr = [2,4,6,8,10];
// for(let i of arr){
//     console.log(i*2)
// }

//for-in
// let person={
//     name:"rahul",
//     age:26,
//     location:"delhi",
//     isMale:true,
// }

// for(let i in person){
//     // console.log(i)
//     console.log(person[i])
// }