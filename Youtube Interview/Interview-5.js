// what is the difference between let const var in javascript

// var is function-scoped, let and const are block-scoped

// What is a spread operator in javascript  ==> (spread (...))

function Sum (x , y, z) {
 return x+y+z;
};

const numbers = [1,2,3];

console.log(Sum(...numbers));  //6

//Arrow Function 
//setInterval in javascript
