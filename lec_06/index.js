
// let userdetails ={
//     name: "abz",
//     age:19,
//     profile:"softwere",
//     printfun:function () {
//         console.log(this.name);
//     }
// }
// userdetails.printfun();

// let userdetails2 ={
//     name: "john",
//     age:10,
//     profile:"softwere",
//     printfun:function () {
//         console.log(this.name);
//     }
// }
// userdetails2.printfun();


//=======================================================
// call ()
//========================================================

//  let userdetails ={
//     name: "abz",
//     age:19,
//     profile:"softwere",
//     printfun:function () { // bag
//         console.log(this.name);
//     }
// }
// userdetails.printfun();

// let userdetails2 ={
//     name: "john",
//     age:10,
//     profile:"softwere",
  
// } 
// userdetails.printfun.call(userdetails2);


//===================================================
//===== end call () here
//=====================================


 let userdetails ={
    name: "abz",
    age:19,
    profile:"softwere",
   
}
let printfun=function (profession,company) {
            console.log(this.name +" "+profession+" "+company);
        }
// printfun.call(userdetails,"teacher","google");

let userdetails2 ={
    name: "john",
    age:10,
    profile:"softwere",
  
} 
// printfun.call(userdetails2,"teacher","google");// call()



printfun.apply(userdetails2,["teacher","google"]); // apply

//=======================================================
// another 
//==============================================================
