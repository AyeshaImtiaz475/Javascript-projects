//the 3 Musketeers of Web Dev
//HTML (Structure) -> CSS(style) -> JS(logic)

// console.log("Hello World");
//window.alert("Hey!. Welcome to Dev Tool");

//Window Object  -> it is created automatically and it is gloabl object 
//alert & prompt is also the part of window 
// console.log(window);
//window.console.log("Hello2");

//What is DOM?
//WHEN A WEBAPGE IS LOADED, THE BROWSER CREATES A DOM(Document Object Model) of the page
//it is a tree like structure and have nodes(objects)
//window 
//   |
//  document
//   |
//   html
//    / \
//  div  span

// console.dir(window);
// console.dir(window.document);
// console.dir(document.body);
// console.dir(document.head);

//document.body.style.background = "white";

//If we don't have the id in html and we are targeting document.getElementbyId then it return the null value in console

//DOM MANIPULATION
//selecting through id 
// let heading = document.getElementById("heading");
// console.log(heading);

//selecting through class -> return the htmlcollection
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);


//If we don't have the class in html and we are targeting document.getElementbyClassName then it return the empty HTML Collection value in console
//  let button = document.getElementById("myId");
//  console.dir(button);


//selecting with tag
// let mypara = document.getElementsByTagName("para");
// console.log(mypara);

//Query Selector -> we can pass id, class, tagName
//  let elements = document.querySelector("p");
//  console.dir(elements);
// //queryselector all return the nodelist 
// let ele = document.querySelectorAll("p");
// console.log(ele);

//properties
//tagName 
//elements
//<p>​ Let's Learn about DOM concepts in detail ​</p>​
//elements.tagName
//'P'

// let value = document.getElementsByTagName("div").children;
// console.log(value);

//homework -> text, comment and element node
//firstchild, lastchild, children

//innertext ->return the text 
// let div =document.querySelector("div");
// console.dir(div);
// // div 
// // / \
// // h4 ul 
// //    / | \
// //   li li li

// //div.innerHTML -> return the HTML Content 
// //textContent  -> it show the hidden element
// let heading = document.querySelector("h1");


//practice Questions 
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apna College Student";


//practice questions
//let divs = document.querySelectorAll(".box");
// console.log(divs[0])

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 2";
// let idx=1;
// for(div of divs)
// {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }


//DOM PART 2
//attributes getAttribute(attr) to get attribute value 

//let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// div.style.backgroundColor  = "green";
// div.style.fontSize= "30px";
// div.style.color = "white";
// div.innerText = "hello!";
//div.style.visibility = "hidden";

//insert eleements 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// //append -> adding the items 
// let div = document.querySelector("div");
// div.append(newBtn);

// //prepend -> adds at the start of node(inside)
// //div.before(newBtn);
// //div.after(newBtn);
// let p = document.querySelector("p");
// p.after(newBtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>Hello, i m new</i>";
// document.querySelector("body").prepend(newheading);

// //remove the element
// let para = document.querySelector("p");
// p.remove();
//appendchild() & removechild homework 


//practice question 1
// let newBtn = document.createElement("newBtn");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color = "white"
// document.querySelector("body").prepend(newBtn);

//practice question 2 -> classlist
// let para = document.querySelector('p');
// para.classList
// DOMTokenList ['content', value: 'content']
// para.classList.add("newClass")
// undefined
// para.classList
// DOMTokenList(2) ['content', 'newClass', value: 'content newClass']