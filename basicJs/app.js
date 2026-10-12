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

// // weekly type programming lang
// let a = "rahul";
// a = 26;
// a = true
// console.log(a); //dynaimcally type

// // synchronous 
// console.log("how are you");
// console.log("today weather is cold")


// let vs var vs const
// let
// let a = "rahul";
// // let a ="rahul";
// a = true;
// console.log(a);

//var 
// var a = "rahul";
// var a ="rahul";
// a = true;
// console.log(a);

// hoisting

// console.log(a);
// var a = 10;
// let a = 10;
// console.log(a);

// Array method
// let arr = [2,4,5,6];

// console.log(arr)
// arr.push("shiv",true,undefined);
// console.log(arr)

// arr.pop();
// console.log(arr);

//splice
// let fruits = ["apple","banana","mango","graps"]
// console.log(fruits);
// fruits.splice(2,0,"orange","tomato");
// console.log(fruits);

// slice
// let newFruits= fruits.slice(2)
// console.log(newFruits)

// hof

// function A(B){
//     console.log("i am inside function A")
//     B();
// }

// function B(){
//     console.log("i am inside function B")
// }

// case 1
// A(B);
// A(function B(){
//     console.log("i am inside function B")
// })

//case2
// function A(){
//     console.log("i am inside function A")
   
//     function B(){
//         console.log("i am inside function B")
//     }
//     return B;
// }
// let ans = A()
// console.log(ans());

// array advance method
let arr = [2,4,6,8,10];
// arr.forEach(function (item,index){
//     console.log(item*2);
// })

// let newArr = arr.map(function(item,index){
//     return (`index:${index}and value:${item*2}`)
// })
// console.log(newArr);

// let newFilter = arr.filter(function(item,index){
//     if(item >= 5){
//         return [item];
//     }
// })
// console.log(newFilter)

// async vs sync
// console.log("first");
// console.log("middle");
// console.log("last");

// async
// console.log("first");
// setTimeout(function(){
//     console.log("middle run after 4 sec");
// },4000)

// setTimeout(function(){
//     console.log("middle run after 2 sec");
// },2000)
// console.log("last");

// // setInterval
// let timer = 0;
// let id = setInterval(function(){
//     timer++;
//     console.log(`timer:${timer}`)
//     if(timer === 7){
//         clearInterval(id)
//         console.log("thala for a reason")
//     }
// },1000)


// let p1 = new Promise(function(resolve,reject){
//     console.log("wait i have send the request");
//     setTimeout(function(){
//         let data = "hii i am data from databse";
//         let err = "sorry request failed";
//         resolve(data);
//         reject(err);
//     },2000)
// })

// p1.then(function(data){
//     console.log(data);
//     console.log("promise fullfilled");
// }).catch(function(err){
//     console.log(err)
// })

//async-await

// async function getData(){
//     let response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let data = await response.json()
//     // console.log(response);
//     console.log(data)
// }
// console.log(getData())