// while creating e-commerse website we have make function for cart wherer we dont know user will add how many product so we have to adjust paramaters in function accordingly
function calculateCartPrice(...num1){ //here we use ... as a rest operator
    return num1
 }
 console.log(calculateCartPrice(2000, 344 ,324,45,34))
 
 const user = {
     username : "hitesh",
     price: 199
 }
 function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleObject(user)
 handleObject({
     username : "mithesh",
     price: 499
 })
 
 const mynewarr =  [34,453,356,2,42,45,54]
 
 function returnSecondValue(getarray){
     return getarray[1]
 }
 console.log(returnSecondValue(mynewarr));