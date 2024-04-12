// immediately invoked function expression (IIFE)
// sometiomes we want to immmediately invoke function after its decalretion to avoid polution in function due to global scope
(function chai(){
    console.log(`DB CONNECTED`);
 })(); //; is imp here

 ((name)=> {
    console.log(`DB CONNECTED ${name}`);
 })('hitesh')