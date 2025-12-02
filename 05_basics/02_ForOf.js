//for of

//["", "", ""]  array of strings
// const fruits = ["apple", "banana", "cherry"];
//[{}, {}, {}]  array of objects
// const fruits = [
//   { name: "apple", color: "red" },
//   { name: "banana", color: "yellow" },
//   { name: "cherry", color: "dark red" },
// ];

const arr = [10, 20, 30, 40, 50];

for (const num of arr) {
//   console.log(num);
}

const str = "Hello";

for (const char of str) {
//   console.log(`Each char is: ${char}`);
}


//Maps

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');
 
// console.log(map);

for (const [key, value] of map) {
    // console.log(`Key is: ${key} and Value is: ${value}`);
}



// const myObj = {
//     game1: 'NFS',
//     game2: 'COD',
    
// };

// for (const [key, value] of Object.entries(myObj)) {
//     // console.log(`Key is: ${key} and Value is: ${value}`); 
// }

const myObj = {
    JS: 'JavaScript',
    PY: 'Python',
    RB: 'Ruby'

};

for(const key in myObj){
    // console.log(`Key is: ${key} and Value is: ${myObj[key]}`);
}

const myArray = [100, 200, 300, 400, 500];
for(const index in myArray){
    // console.log(`Index is: ${index} and Value is: ${myArray[index]}`);
}


const programming = ["JavaScript", "Python", "Ruby", "Java", "C++"];

for(const key in programming){
    // console.log(programming[key]);
}















