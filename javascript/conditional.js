const prompt = require("prompt-sync")();

// Conditional statment - If and else condition

// 0-18 = Child
// 19 - 30 = Adult
// 31 - 45 = Mature
// > 45 = Old


let age = parseInt(prompt("Enter your age: "));
let ageGroup = "";

if(!Number.isNaN(age)){
    if(age <= 18){
        ageGroup = "Child";
    }else if(age > 18 && age <= 30){
        ageGroup = "Adult";
    }else if(age > 30 && age <= 45){
        ageGroup = "Mature";
    }else{
        ageGroup = "Old";
    }
    console.log(age,"-",ageGroup);
}else{
    console.log("input is not correct");
}

// How to take input from console.
// prompt-sync
// npm install prompt-sync
