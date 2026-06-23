
// Random Number

// 1 to 100
// 100 - 500
// range = 500 - 100 = 400

// 5

function createRandom(totalCharacter, randomString){

    let random = function generateRandom(){
//let ar = "abcdefghijklmopqrstuvwxyz0123456789"
        let start = 0;
        let end = randomString.length;
        //let totalDigit = 36
        //for(let k = 1; k <= 10; k++){
            let randomNumber = "";
            for(let i = 0; i < totalCharacter; i++){
            let index = start + Math.floor(Math.random() * (end-start));
            randomNumber = randomNumber + randomString[index];
            }
            return randomNumber;
       // }
    }
    return random;
}

let lowerCaseRandom10Char = createRandom(10, 'abcdefghijkmnopqrstuvwxyz');
console.log(lowerCaseRandom10Char());

let random_number4 = createRandom(4, '01234567890');
console.log(random_number4());

let lowerUpperRandom10Char = createRandom(10, 'abcdefghijkmnopqrstuvwxyz'+'abcdefghijkmnopqrstuvwxyz'.toUpperCase());
console.log(lowerUpperRandom10Char());
// 0 to 1 
// 29.9
// 29 - floor
// ceil = 30


