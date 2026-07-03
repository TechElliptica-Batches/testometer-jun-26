// promises 
// WHat is promise ?
// they gave you surity . that i will return you some status for
// pending, fulfilled (resolve), rejected

const p1 = new Promise((a,b) => {
    b("Hello");
});
// fullfilled -> then
// reject -> catch

p1.then((msg)=>{
    console.log("Then ->",msg)
}).catch((msg)=>{
    console.log("Catch ->",msg)
})
