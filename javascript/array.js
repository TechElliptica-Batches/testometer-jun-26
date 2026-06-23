
// What is array?
// collection datatype

// index - 0 

// let ar = [ 10, 20, 30, 40 ];
// //ar[2] = 12;

//  ar.splice(2 ,1, 12);
// console.log(ar);
// splice(index, deleteCount)


// ar.push(45); // [ 10, 20, 30, 40 , 45]
// ar.unshift(34); // [ 34, 10, 20, 30, 40 , 45]
// ar.pop();   // [ 34, 10, 20, 30, 40 ]
// ar.unshift(12); // [12,  34, 10, 20, 30, 40 ]
// ar.push(78); // [12,  34, 10, 20, 30, 40 , 78]
// ar.shift(); //  [  34, 10, 20, 30, 40 , 78]
// ar.pop();   //  [ 34, 10, 20, 30, 40 ]
// console.table(ar);

// splice - add and remove from mid


// let ar = [10, 20, 3, 11, 101];
// 3, 10 11 20 101
// convert all value as string then sort
// ar.sort((a,b) => a-b);
// console.log(ar);
// aaa, aa, ab, ac, aac, abc
// aa, aaa, aac, ab, abc, ac



// push - add value to the last 
// pop - remove last value
// unshift - add value to the start
// shift - remove data from start


//.        0.  1.  2.  3 
// max index = outbound index = 3
// size = 4
// size = outbound + 1

// console.table(ar);

// for(let i = 0; i < ar.length; i++){
//     console.log(ar[i]);
// }

//       0.  1.  2.   3
//console.log(ar[1]); // 20
// for each loop - of
// for(let a of ar ){
//     console.log(a);
// }

// array index entity


// use marks 

student1Marks = [10,20,30,40];
student2Marks = [40,20,10,50];

totalStudentMarks = [
    student1Marks, student2Marks
]

console.log(totalStudentMarks[0][0] , totalStudentMarks[1][2]);
// 2D array = excel sheet

// JSON - Java script object notation

