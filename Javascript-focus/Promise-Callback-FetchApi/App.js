//synchronous programming text -> means the code in a particular sequences of instruction given in the program.
//each instruction wait for the previous instruction to complete its executions
// console.log("Hello world");
// console.log("One");
// console.log("Two");

// //asynchronous code execution allow to execute next instructions immediatley and doesn't block the flow 
// function hello()
// {
//  console.log("hello, I am here to do the coding");
// }
// setTimeout(hello, 3000);
// //it contain the 2 parameters to execute the code with specific time period 
// console.log("three");
// console.log("four");

// function sum(a,b)
// {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback)
// {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);


//callback hell
//nested callbacks stacked below one another forming a pyramid strcuture

// let age = 18;
// if(age >= 18)
// {
//     if(age >= 60)
//     {
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }
// }
// else{
//     console.log("junior");
// }

//callback nesting (this style of programming becomes difficult to understand & manage)

//database fteching data 
// function getData(dataId)
// {
//     console.log("data", dataId);
// }

// function getData(dataId)
// {
//    setTimeout(() => {
//     console.log("data", dataId);
//    }, 2000);
// }

// //function in which we have to get data1, data2, and then data3
// function getData(dataId, getNextData)
// {
//     //2s
//    setTimeout(() => {
//     console.log("data", dataId);
//     //what if the nextdata don't exists
//     if(getNextData)
//     {
//         getNextData();
//     }
//    }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });    //callback hell
// });

//after the callback hell problem promises came to solve the problem
//promise is for "eventual" completion of task. It is an object in JS
//It is the solution of the callback hell
//states -> pending, fullfilled, rejected (hander)

// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         //resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fullfilled", res);
// })
// promise.catch((err) => {
//     console.log("rejected", err);
// })
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   //resolve();
//   reject("some error occured");
// })


//promise chain
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some details");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some details");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("Fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// });


// console.log("Fetching data2");
// let p2 = asyncFunc();
// p2.then((res) => {
//     console.log(res);
// })
// function getData(dataId, getNextData)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         },5000);
//     });
// };

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
//     let p2 = getData(2).then(() => {
//         console.log(res);
//     })
// })

//promise chaining
console.log("Data fetching 1 .......");
getData(1)
.then((res) => {
    console.log("Data fetching 2 .......");
    return getData(2);
})
.then((res) => {
    console.log("Data fetching 3 .......");
    return getData(3);
})
.then((res) => {
    console.log(res);
});


//prnding , resolved (object result), rejected (reject : error)
//how to use the promise 
//.then() & .catch()
//promise.then((res) => {...}) -> fullfilled 
//promise.catch((res) => {...}) -> reject 

//Async-Awit simple promises
//async function always returns apromise 
//await pauses its surrounding function execution 

function api()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
};

// await api(); error 
async function getWeatherData()
{
    await api(); //await is always used inside the asyunc function
    await api(); //2nd data
}

function getData(dataId, getNextData)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    });
};

//async-await 
 async function getAllData()
 {
    console.log("fetching data1 ...");
    await getData(1);
    console.log("fetching data2 ....");
    await getData(2);
    console.log("Fetching data 3 ...");
    await getData(3);
 }


 //IIFE: Immediately invoked function expression
 //it is the function that is called immedialtely as soon as it is defined

 (async function ()
 {
    console.log("fetching data1 ...");
    await getData(1);
    console.log("fetching data2 ....");
    await getData(2);
    console.log("Fetching data 3 ...");
    await getData(3);
 })();
