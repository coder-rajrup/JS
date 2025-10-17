let x = 100
if(true){

    let x = 10
    // console.log("INNER:",x) // 10 //Block Scope
}
// console.log("OUTER:",x) // 100 //Global Scope


function one(){
    const username = "RAJ"

    function two(){
        const website =" Youtube"
        // console.log(username);
        
// console.log(website);
    }
     two()
    // console.log(website); // Error: website is not defined
}
// one()
// console.log(username); // Error: username is not defined
// console.log(website); // Error: website is not defined

if(true){
    const username = "RAJ"
    if (username === "RAJ") {
        const website = "Youtube";
        // console.log(username);
        // console.log(website);

    }
    // console.log(website); // Error: website is not defined
    
}
// console.log(username); // Error: username is not defined

// ++++++++++++++ Interesting+++++++++++++++++++++++

function addone(num){
    return num + 1;

}
console.log(addone(5))

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5))






