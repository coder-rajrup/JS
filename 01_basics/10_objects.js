//singleton

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
console.log(JsUser[mySym]);





// JsUser.email = "raj@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "raj@gmail.com";
// console.log(JsUser.email);