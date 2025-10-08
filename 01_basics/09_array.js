const myArr =[0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Thor", "Spider Man"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(-1)
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));


const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);



//slice, splice
// console.log("A", myArr);
// const myNewArr = myArr.slice(1, 3)
// console.log( myNewArr);
// console.log("B", myArr);


// console.log("A", myArr);
// const myNewArr2 = myArr.splice(1, 3)
// console.log( myNewArr);
// console.log( myNewArr2);



const marvelHeros = ["Iron Man", "Thor", "Spider Man"]
const dcHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(...dcHeros)
// console.log(marvelHeros);


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros);



// const rarecase = [1, 2, 3, [4, 5, 6],[7, 8,[9, 10]]] 

// const newRarecase = rarecase.flat(2)
// console.log(newRarecase);



Array.isArray("Raj")

console.log(Array.isArray("Raj"));
console.log(Array.from("Raj"));
console.log(Array.from({name: "Raj"})); // Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
