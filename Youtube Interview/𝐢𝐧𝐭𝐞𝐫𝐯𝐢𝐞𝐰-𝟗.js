//https://www.youtube.com/watch?v=Mr3D1-AmCvU

//1
 const arr = [3 , 5, 7];
arr.foo = "hello";
for(let i in arr){
    console.log(i) // 0 1 2 foo
}
for(let i of arr){
    console.log(i) //3 5 7
}

//2
let i;
for (i=0;i<3;i++){
    const log=()=>{
         console.log(i); //3 3 3
    }
    setTimeout(log,100);
}

//3
const promise=new Promise(res=>res(2));
promise.then(v=>{
    console.log(v); //2
    return v*2;
})
.then(v=>{
    console.log(v); //4
     return v*2;
})
.finally(v=>{
    console.log(v); //undefined
    return v*2;
})
.then(v=>{
    console.log(v);//8
});