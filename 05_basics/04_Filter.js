
//  const myNums = [1, 2, 3, 4, 5];
 


//  const newNums = myNums.filter( (num) => num > 4);

// console.log(newNums);
 const books =[
    { title: "Book One", genre: "Novel", published: 1925, edition: 2004 },
    { title: "Book Two", genre: "Science Fiction", published: 1950, edition: 1991 },
    { title: "Book Three", genre: "Fantasy", published: 2001, edition: 2012 },
    { title: "Book Four", genre: "Non-Fiction", published: 1995, edition: 2000 },
    { title: "Book Five", genre: "Mystery", published: 1988, edition: 1995 },
    { title: "Book Six", genre: "Novel", published: 2010, edition: 2015 },
    { title: "Book Seven", genre: "Science Fiction", published: 1975, edition: 1985 },
    { title: "Book Eight", genre: "Fantasy", published: 1999, edition: 2005 },
    { title: "Book Nine", genre: "Non-Fiction", published: 2005, edition: 2010 },
    { title: "Book Ten", genre: "Mystery", published: 1965, edition: 1975 },
    { title: "Book Eleven", genre: "Novel", published: 1980, edition: 1990 }
];
 let userbooks = books.filter( (bk) => bk.genre === "Novel");
    userbooks = books.filter( (bk) => bk.published >= 2000 && bk.genre === "Fantasy" && bk.edition >= 2000);

// console.log(userbooks);

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => { return num +10});
const newNums = myNumbers
        .map( (num) => num * 10 )
        .map( (num) => num + 1)
        .filter( (num) => num >= 40 );

// console.log(newNums);


const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, currval) { 
//     console.log(`acc: ${acc} and currval: ${currval}`);
     
//     return acc + currval; }, 0);

// console.log(myTotal);

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0);


const shoppingCart = [
    { item: "Js Course", price: 999},
    { item: "py Course", price: 899 },
    { item: "java Course", price: 1299 },
    { item: "Kotlin Course", price: 1899 },
    { item: "Rubi Course", price: 799 },
    { item: "C Course", price: 699 },
    { item: "R Course", price: 599 },
];

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price , 0);

console.log(totalPrice);








