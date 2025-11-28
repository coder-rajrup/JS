// for loop
// for (let i = 0; i <= 5; i++){
//   const element = i;    
//   if(element == 3) {
//     // console.log('Three is a crowd');
    
//   }
  // console.log(element);

// }

for(let i = 5; i >= 0; i--){
  // console.log(`Outer loop: ${i}`);

 for (let j = 0; j <= i; j++){
    // console.log(` Inner loop: ${j} and innner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
    
  }

}
let myArray = ['Japan', 'Paris', 'China', 'Rome', 'Germany'];
// console.log('---- Array Elements ----');
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
  
}


//break and continue
for (let i = 0; i <= 10; i++) {
  if(i == 5){
    // break;
    console.log(`Detected 5`);
    
    continue;
  }
  console.log(`Value of i is ${i}`);
  
}












