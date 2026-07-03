
// setTimeout - i will execute this function after specified delay

function click(element){
    let p1 = new Promise((resolve, reject) =>{
           setTimeout(()=>{
            console.log(element, "Clicked");
            resolve();
        }, 5000);
    }) 
    return p1; 
}
function fill(element, text){
    let p2 = new Promise((resolve, reject) =>{
           setTimeout(()=>{
            console.log(element, "filled with", text);
            resolve();
        }, 1000);
    }) 
    return p2; 
    
}

// click("login link").then(()=>{
//     return fill("username","user1")
// }).then(()=>{
//     return fill("password","pass1")
// }).then(() => {
//     click("login button");
// }).catch(()=>{
//     console.log("Issue found");
// })

// What is await - i am waiting for function to return me a promise status
// await always use with function which is return promise
// await always be inside async function


async function loginFlow(){
    try{
        await click("login link");
        await fill("username","user1");
        await fill("password","pass1");
        await click("login button");
    }catch(err){
        console.log("Error", err)
    }finally{
        console.log("I am finally")
    }
}
loginFlow();


// 

// click on login link
// enter username 
// enter password
// clcik on login button


// Javascritp is a single threaded language
// javascript trigger the function sequencially , but dont wait to finish it

// web design language 


//

// playwright , click() - 5 ms
//

// param,  functionname, delay in ms

