 //+++++++++++++ arrow function +++++++++++++++++
 const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
 }
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// const chai = function() {   normal function
//     let username = "mohi"
//     console.log(this.username);
// }

const chai = () => { // arrow function
    let username = "mohi"
    console.log(this.username);
}
chai()

const addtwo = (num1 , num2) => {
    return num1 + num2
}

// their is another way of writing arrow function called as implisit return

const addtwo1 = (num1 , num2) => num1 + num2

const addtwo2 = (num1 , num2) => (num1 + num2)

const addtwo3 = (num1 , num2) => ({username:"hitesh"}) // to return object we must write it in {}