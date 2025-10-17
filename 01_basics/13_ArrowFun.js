const user = {
    username: " RAJ ",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website `);
        console.log(this);
             

    }
}

// user.welcomeMessage()
// user.username = " RUP "
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "RAJ"
//     console.log(this.username);
// }

// chai();


// const chai = function (){

//     let username = "RAJ"
//     console.log(this.username);
// }

// chai();
// const chai  = ()=> { 

//     let username = "RAJ"
//     console.log(this.username);
// }

// chai();

//  const addTwo = (a,b) => {
//     return a + b;
//  }

//  const addTwo = (a,b) => a + b;
  const addTwo = (a,b) => (a + b);

 

    console.log(addTwo(2,3));








