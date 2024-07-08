// const num = String(6);

// let num =  6;

// console.log(typeof num);
// const a =parseInt("9");
// ;
// console.log(typeof a);

// console.log(num,typeof num);

// let num2 = "689";
// console.log(num2,typeof num2);
// var z;

// z=999999;
// let x=9;
// console.log(x, typeof x);
// console.log(z, typeof z);

// x = x;
// console.log(x, typeof x);

// x = x  -2;
// console.log(x, typeof x);


// console.log(Boolean(1));
// console.log(Boolean(0));

//  string method
    
// non destructive method  

//  let msg ="    dont talk            ";
//  msg.toUpperCase();
//  console.log(msg.toUpperCase());

//  msg.toLowerCase(msg);

//  console.log(msg.trim());
//  console.log(msg.trim());





// let str ="hello world";
// document.write(str.substring(4));
// console.log(str.substring(4,8));
// console.log(str);
// console.log(str.substring(4,4));
// console.log(str.substring(7,2));//swap 2,7

// function fun() {

//   var a = 100;

//   function innerFun() {
//     a= a+1;
//     console.log(a);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//   }

//   return innerFun;
// }
// var f =fun()
// f();

// console.log(f());
// var f=fun();
// f();
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(fun());
// var f=fun();
// f();
// f();
// f();
// f();
// console.log(f)
// var f = fun();
// fun()() ;//101 ans 
// fun()() ;//101 ans 
// f();//102 ans 
// f();//102 ans 
// console.log(f);

// f();
// f();
// f();
// f();
// console.log(fun());


// var x ;
// console.log(x);
// x=5;
// console.log(x);
// var y=2;
// function fun2() {
//   y=y+1;
//   console.log(y);
// }
// fun2();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     let size = fruits.toString();
//     // let size = fruits.at(2);
//     let size = fruits[2];
    
//     console.log(size);
    // document.write(size)

// ================================================================
// ===========================                 ====================
// ================================================================

// 

function funouter() {
   
    let funa = 11;
    let  a =99;
    console.log(a+" 125 line")//99
    function innerfun1() {
        a=a+1;
        console.log(a +" 127 line")//99
        let b = 999999;
        console.log(funa)
    }
    function innerfun2() {
        a=a+1;
        console.log(a + " 130")
        console.log(funa);
    }
    innerfun1();
    innerfun2();
}

funouter();