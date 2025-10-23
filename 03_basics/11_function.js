function sayMyName(){
    // console.log("R");
    // console.log("A");
    // console.log("J");
}

// sayMyName();


function addTwoNumbers(num1, num2){
//    let result = num1 + num2;
//     return result;
    return num1 + num2; 
}
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

const result = addTwoNumbers(5, 7)
// console.log("Result:", result);



function loginUserMessage(username){
    
    if(!username){
        return "Please enter a valid username";
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Rajat"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500)); // 200

const user = {
    username: "Rajat",
    price: 500
}

function handleObject(obj){
console.log(`Username is ${obj.username} and Price is ${obj.price} age is ${obj.age}`); // Username: Rajat, Price: 500
    
}
// handleObject(user)
// handleObject({
//     username:"Ram", 
//     price: 500, 
//     age: 22
// })

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];

}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 300, 400, 500]));








