// Immediately Invoked Function Expression (IIFE)

    (function chai(){
        console.log(" DB CONNECTED ");
    })(); // Normal Function Call



// (   () => {
//         console.log(" DB CONNECTED ARROW ");
//     }   )(); // Arrow Function Call


(   (name) => {
        console.log(`DB CONNECTED ARROW ${name}`);
    }   )("RAJ"); // Arrow Function Call



    



