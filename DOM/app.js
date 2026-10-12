// console.log(document);

// id
// let h1 = document.getElementById("heading");
// console.log(h1);

// class
// let para = document.getElementsByClassName("para");
// console.log(para);

// tag
// let p = document.getElementsByTagName('p');
// console.log(p);

// // querySelector
// let heading = document.querySelector("#heading");
// console.log(heading)

// let para = document.querySelector(".para");
// console.log(para)

// let para1 = document.querySelectorAll(".para")
// console.log(para1)

//access content

// let h1 = document.getElementById("heading");
// h1.innerHTML = "DOM"
// console.log(h1.innerHTML);

let div = document.querySelector('div');

// console.log(div.innerText)
// console.log(div.textContent)

// let h2 = document.createElement("h2");

// h2.textContent="I am child of parent div"
// div.appendChild(h2)
// console.log(div)

//applying css
// div.style.backgroundColor = "red";
// div.style.width = "400px"
// div.style.height = "400px"

 div.style.cssText="background-color:green;width:300px;height:300px"

// add classs
// div.classList.add("box");
// console.log(div)

// events
let button = document.querySelector('button');

function changeColor(){
    if(div.style.backgroundColor === "red"){
        div.style.backgroundColor = "green"
    }else{
        div.style.backgroundColor = "red"
    }
}

button.addEventListener('click',changeColor);

let link = document.querySelector('a');

function clickLink(event){
    console.log(event);
    event.preventDefault();

}

link.addEventListener('click',clickLink)

let inp = document.querySelector("input")

function enterInput(e){
    console.log(e.target.value)
}
inp.addEventListener('input',enterInput)