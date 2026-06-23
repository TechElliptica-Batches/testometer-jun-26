import { valueOfPI, multiply } from "./func1.js";


let radius = 12;
let areaOfCircle = multiply(valueOfPI() , multiply(radius , radius));
console.log(areaOfCircle);


// Function are variables in javascript

let printerName = function printMyName(){
    console.log("Vaibhav Singh");
}

let pr = printerName;
pr();


