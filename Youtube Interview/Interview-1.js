//  Interview Quesions

//   const arr=[,,,]
//   console.log(arr.length) //3

 function abc (a,b,c=0){

 }

 function xyz (a,b=0,c){

 }

 function pqr(a=0,b,c){

 }

 console.log(abc.length)//2
 console.log(xyz.length)//1
 console.log(pqr.length)//0

//  const arr1=[];
//  const arr=[];

//  console.log(arr==arr1)  //false
//  console.log(arr===arr1) //false


  if([])
 {
      console.log("I am Saniya")
  }else
 {
     console.log("I am Absent")
 }
   
// (I am Saniya)


  if([] == true)
 {
      console.log("I am Saniya")
  }else
 {
     console.log("I am Absent")
 }
 //I am Absent



 console.log( [] ? true:false)  //true

 console.log('1'+2+2) //122

console.log(2+2+'1'+2+2) //4122


const arr = ['saniya' , 'niya']

const first = arr[0];
const second = arr[1];

let flag = false;
for(let char of second){
    if(first.includes(char)){
        flag = true;
        break;
    }
}

console.log(flag ? "present":"no match char");//present 



var c= 200;
{
    var c = 400
}

let d=c;

{
let d = -400
}

console.log(d)//400

// var c= 200;
// {
//     let c = 400
// }

// let d=c;

// {
// let d = -400
// }

// console.log(d)//200



// let obj = {
//     a: {
//         b: undefined
//     }
// }

// console.log(obj.a?.b?.c?.d??"Saniya") //Saniya  because left hand side value is undefinde so this take right hand side value so output will be Saniya


var lmn = 25;
if(function f(){}){
    lmn = lmn+typeof f;
}

console.log(lmn);
// JavaScript Array Methods
//What is the difference between every() and some() methods
//shallow copy and deep copy
//handle asynchronous code in three ways 1.callback function 2.promise 3.async&await
 
const a = 10
const b = 10
const c = "10"

console.log(a === b)