// DOM Manipulation

// GetElementById()
// GetElementByClassName()
// GetElementByTagName()
// querySelector()=====>select the first slector (div)
// querySelectorAll()

// --------------------------------------------------------------

const title = document.getElementById("main-heading");
console.log(title);
const listItem = document.getElementsByClassName("list-items");
console.log(listItem);
const container = document.querySelector("div");
console.log(container);
const alldives = document.querySelectorAll("div");
console.log(alldives);

// --------------------------------
// you can use slectore for calling classes or ids

const titleSelector = document.querySelector("#main-heading");

console.log(titleSelector);
titleSelector.style.color = "red";

const containreSelector = document.querySelector(".container");

containreSelector.style.width = "60%";

const listItemsSelector = document.querySelectorAll(".list-items");

console.log(listItemsSelector);
// listItemsSelector.style.fontSize='2rem ' ==>not work because is array it's need for

for (const element of listItemsSelector) {
  element.style.color = "blue";
  element.style.fontSize = "1.3rem";
}

// ------------------ handling element
//create
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.append(li);
//update

const firstItem = document.querySelector(".list-items");
console.log(firstItem.innerText);
console.log(firstItem.innerHTML);
console.log(firstItem.textContent);

firstItem.innerText = "Xmen";

// delete

// li.remove();

// -------------------------------- modify Attribute & classes

const liSelector = document.querySelector("li");
liSelector.innerText = "X-men";

// ---for id -----

liSelector.setAttribute("id", "main-heading");
console.log(liSelector.getAttribute("id"));
liSelector.removeAttribute("id");

// ---for class -----

liSelector.classList.add("list-items");
console.log(liSelector.classList.contains("list-items"));
liSelector.classList.remove("list-items");

// -----------------------------------------------------------------------

// DOM Manipulation

// Traverse the DOM
// Parent Node Traversal
// Child Node Traversal
// Sibling Node Traversal

// -----------------------Parent Node Traversal

let ulParent=document.querySelector('.container')
console.log(ulParent.parentElement)
console.log(ulParent.parentNode.parentElement)
// -----------------------Child Node Traversal

console.log(ulParent.childNodes) 
// =====>childNodes with indentaions so childeren better
console.log(ulParent.children)

// Element make wiithout indentaion
console.log(ulParent.firstElementChild)
console.log("**********");

let divSibling=document.querySelector('#main-heading')
console.log(divSibling.nextElementSibling)



// -----------------------------------------------------------------------

// DOM Manipulation

// Event Listeners

// elemebt.addEventListener("click",function) 


const changeBgColor=(item)=>{
item.style.background="red"
}

const changeBgColor2=(item)=>{
item.style.color="blue"
}

const btn2=document.querySelector(".btn-2")
btn2.addEventListener("click",()=>alert('pizzaaaaaaaaaaaa')) 
btn2.addEventListener("mouseover",()=>changeBgColor(btn2)) 
btn2.addEventListener("mouseover",()=>changeBgColor2(btn2)) 


let hidden = true;

const btnHidden = document.querySelector(".reaveal-button");
const divHidden = document.querySelector(".hidden");


  // btnHidden.addEventListener("click", () => {
  //   console.log("Toggle clicked");
  //   if (hidden) {
  //     divHidden.style.display = "block";
  //   } else {
  //     divHidden.style.display = "none";
  //   }
  //   hidden = !hidden; // Toggle the state
  // });


  //******************  second way***************

  btnHidden.addEventListener("click", () => {
    console.log("Toggle clicked");
    if (hidden) {
   divHidden.classList.remove("hiddenItem")
    } else {
      divHidden.classList.add("hiddenItem")
    }
    hidden = !hidden; // Toggle the state
  });


// -----------------------------------------------------------------------

// DOM Manipulation

//  Event Probagation
//    1- Event Capturing
//    2- taget
//    3- event bubbling

const dd=document.querySelector('.test')

dd.addEventListener('click',(e)=>{
  console.log(e)
})