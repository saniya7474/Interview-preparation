//https://www.youtube.com/watch?v=yQw69PUxmos&t=520s

// var is function-scoped, let and const are block-scoped

// what is the difference between let const var in javascript

// Answer ==> 
 
   // 1 Var:

// Var has function scope , not block-scope so variables declared with var can be accessed outside of a block
// We can variable redeclare
// We can reassign value



// const myfunction = () =>{
//     try {
//         var a = 10
//         var a = 20 //variable redeclare
//         a = 50 //reassign value

//         console.log(a) //50
//     } catch (error) {
        
//     }
// } 

// myfunction()



// 2 let :

// let has block-scope , so it is only accessible within {} curley bracket
// We can not variable redeclare
// We can reassign value

// const myfunction = () =>{
//     try {
//         var a = 10
//         var a = 20 //variable redeclare
//         a = 50 //reassign value

//         if(true){
//             let b = 10
//            // let b = 20 ==> *redeclare can not ne allowed
//            b = 30
//             console.log(b) //30
//         }

//         console.log(a) //50
//     } catch (error) {
        
//     }
// }
// myfunction()



// 3 const :
// Const also has block-scope and works like let
// We can not variable redeclare
// We can not reassign value


const myfunction = () =>{
    try {
        var a = 10
        var a = 20 //variable redeclare
        a = 50 //reassign value

        if(true){
            let b = 10
           // let b = 20 ==> *redeclare can not ne allowed
           b = 30  //==> reassign value
             console.log(b) //30
        }

        console.log(a) //50
    } catch (error) {
        
    }
}
myfunction()



// What is a spread operator in javascript  ==> (spread (...))

function Sum (x , y, z) {
 return x+y+z;
};

const numbers = [1,2,3];

console.log(Sum(...numbers));  //6

//Arrow Function 
// setInterval
//controlled and uncontrolled components in react js
//what is hooks in react js
//why we use props in react
