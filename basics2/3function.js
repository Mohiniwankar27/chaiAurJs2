let a = 10 // let have block scope 
const b = 20 // const also have block scope
var c = 30 // var have global scope it cretes problem so avoid using var

function one(){
    const username = "hitesh"
    function two(){
        const website = "hitesh@gmail.com"
        console.log(username); 
    }
 console.log(username); 
two() 
}
one()

 if(true){
    const username = "hitesh"
    if (username == "hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website);
    console.log(username);
 }

 //++++++++++++intersting++++++++++++++

 function addone(num){ // simple function
    return num+1
 }
 addone(5)

 const addtwo = function(num){ // this type of function is called as expression
    return num+2
 }
 addtwo(5) // we must declare this function  before calling it



