// implicit global - global. - not a good practice
// var  - global + function  , redefine 
// let  - block scope , not redefine 
// const - block scope, not redefine

// 90% 

// 

{
   let b = 1; 
   {
    let b = 20;
    console.log(b);
   }
   console.log(b);
}

{
   let b = 10;
   console.log(b);
}
