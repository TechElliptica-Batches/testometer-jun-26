

// Function is variable in javascript

let starPrinter = (content) => {
    console.log("**************", content, "************");
}
let hashPrinter = (content) => {
    console.log("############", content, "##########");
}

function add(a, b, printStyle){
    let c = a + b;
    printStyle(c);
}
let k = 10;
let m = 20;
add (k , m  , starPrinter);
add( 30, 40 , hashPrinter);



// add - function name
// a, b = parameters
// function body
// k, m = arguments

// High Order Functions
// call back functiona

