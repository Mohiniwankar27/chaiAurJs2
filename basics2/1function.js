// function addtwonum(num1 , num2){
//     console.log(num1 + num2);
// }

function addtwonum(num1 , num2){
    //  let result = num1 + num2
    //  return result
    return num1 + num2
}
const result = addtwonum(3,5)
console.log("result : " , result);

function loginUserMessage(username){
if(!undefined){ //username === undefined
   console.log("please enter a username");
   return
}
else{
    return `${username} just logged in`
}

}
console.log(loginUserMessage("mohi"))
console.log(loginUserMessage())