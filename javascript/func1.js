

// Functions  - reusability
// Services -. take input -> perform operations -> output

// Calculator 
// + button
// input = 2, take input
// logic -> curly brace 
// output = 1 , return 

// add, subtract, multiply

// fucntion are hoisted

let c = add(10,20);
console.log(c);


function add(a,b){
    let c = a + b;
    return c;
}

export function subtarct(a,b){
    let c = a - b;
    return c;
}

export function multiply(a,b){
    let c = a * b;
    return c;
}

export function square(a){
    let c = multiply(a, a);
    return c;
}

export function valueOfPI(){
   return 3.14; 
}

// 1 function is 1 responsibility

// pi * r * r


// let s = add(10, 30);
// console.log(s);



