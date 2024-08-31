//events in JS
//The change in the state of an object is known as an event
    
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("Button1 was clicked - hanlder1");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("Button1 was clicked - hanlder2");
// });
// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// }
// btn1.addEventListener("click", (evt) => {
//     console.log("Button1 was clicked - hanlder4");
// });

// btn1.removeEventListener("click", handler3);

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// mode.addEventListener("click",(e) => {
//     if(currMode === 'light'){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = 'light';
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });



// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clinetX, e.clientY);
// };
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a= 28;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// dispatchEvent.onmouseover = (e) => {
//     console.log('You are inside div')
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clinetX, e.clientY);
// }

//inline event handling -> js event handling (priority for js event handling)
//It is a special object that has details about the event. 
//All event handlers have access to the event objects properties and methods 


//event listeners 
//addeventlistener , removeeventlistener 

//node.addEvent