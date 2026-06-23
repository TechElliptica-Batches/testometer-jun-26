
// function multipliar(multipliarValue){
//     let retFun  = function multiply(value){
//         return multipliarValue * value;
//     }
//     return retFun;
// }


// let double = multipliar(2);
// let triple = multipliar(3);
   
//  console.log(double(40));
//  console.log(triple(40));


// loginpage
// LoginPage: user login en
// PaymentPage: user send payment for xyz

// Closures

function createLogger(module){
    let logger = function log(msg){
        console.log(`${module}: ${msg}`)
    }
    return logger;
}

let loginLogger = createLogger("LoginPage");
loginLogger("This is a login page");
loginLogger("entering abc as username");

let paymentLogger = createLogger("PaymentPage");
paymentLogger("This is a login page");
paymentLogger("entering abc as username");
