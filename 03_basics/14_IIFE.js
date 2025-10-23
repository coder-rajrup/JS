// Immediately Invoked Function Expression (IIFE)

    (function chai(){
        // console.log(" DB CONNECTED ");
    })(); // Normal Function Call



// (   () => {
//         console.log(" DB CONNECTED ARROW ");
//     }   )(); // Arrow Function Call


// (   (name) => {
        // console.log(`DB CONNECTED ARROW ${name}`);
    // }   )("RAJ"); // Arrow Function Call


let val1 = 10
let val2 = 20

function addNum(num1, num2){
    let total = num1 + num2
     return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(100, 200)

console.log(result1);
console.log(result2);



    



