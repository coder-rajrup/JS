//singleton

//Part 1

//object literal 

const mySym = Symbol("key1");

const JsUser = {
    name: "Raj",
    [mySym]: "mykey1",
    age: 30,
    email: "raj@example.com",
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);





JsUser.email = "raj@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "raj@gmail.com";
// console.log(JsUser.email);

JsUser.greeting = function() {
    // console.log("Hello JsUser");
}

// console.log(JsUser.greeting());


JsUser.greetingTwo = function() {
    // console.log(`Hello JsUser ${this.name}`);
}

// console.log(JsUser.greetingTwo());


//++++++++++++++ Part 2 +++++++++++++

const tinderUser = {}


tinderUser.id = "123abc";
tinderUser.name = "Elon Musk";
tinderUser.isLoggedIn = false;
tinderUser.age = 49;
tinderUser.email = "elon@tinder.com";

// console.log(tinderUser);

const regularUser = {
    email: "regular@tinder.com",
    fullname: {
        userfullname:{
            firstname: "Elon",
            lastname: "Musk" 
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


const users = [
    {
        id: "12345abc",
        email: "elonmusk@tinder.com"
    },
    {
        id: "456def",
        email: "musk@tinder.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Raj",
    courseLength: "30 days"
}
// course.courseInstructor

const{courseInstructor: instructor} = course;
console.log(instructor);



