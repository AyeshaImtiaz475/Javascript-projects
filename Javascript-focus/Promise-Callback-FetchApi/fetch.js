//fetch api provides an interface for fetchig (sending/receiving) resources.
//it uses reuest and response objects
//the fetch() method is used to fetch a resources (data).

//API: APPLICATION PROGRAMMING INTERFACE
const URL = "https://fakestoreapi.com/products";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//  let promise =fetch(URL);
//  console.log(promise);

const getApi = async () => {
    console.log("getting data ....");
    let response = await fetch(URL);
    // console.log(response.status);
    console.log(response); //json format
    let data = await response.json(); //return the second promise 
    //console.log(data[0]).text;
    factPara.innerText = data[1].text;
};

//promise chaining
// function getApi()
// {
//     fetch(URL).then((response) => {
//     return  response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
// };

btn.addEventListener("click", getApi);

//understanding terms 
//AJAX is Asynchronous JS & XML
//JSON is javascript object Notation 

//dataformat: when you are sending the money to your freind you can send it in the form of paypak, jazzcash, easypaisa, cash and in the form of bank transfer
//as the dataformat change then the instruction to control thos edata also change

//json() method: return the second promise that resolve with the result of parsing the 
//response body text as JSON (Input is JSOn, output is JS object)


//Requests & response 
//HTTP Verbs -> Hypertext transfer protocols
//Request mthod (GET, POST, PATCH, PUT, CONNECT, DELETE)
