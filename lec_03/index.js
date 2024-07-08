
console.log(a);// undefined 
console.log(a);// undefined 
var a = 100;
console.log(a);//100
var a = 1001;
console.log(a);
var a = 1002;
console.log(a);


console.log(b);

var b;
b="now define ";
console.log(b +" line 15");

fun1();
function fun1() {
  console.log("hello js fun1 ")
}

// fun2();
// var fun2=function() {
//   console.log("hello js ")
// }

//=====================================================


// lexical scop 

function lexical() {
  let username = "abc";
  function innerfun() {
    let a ="my123";
    console.log("innerfun",username);

  }
  function innerfun2() {
    console.log("innerfun2",username);
    // console.log(a);
  }
  innerfun();
  innerfun2();
}
lexical();
// =========================================



// =================================

// clouser

function clouser() {
  const name ="clouser";
  function fun() {
    console.log(name);
  }
  return fun;
}

const myclouser = clouser();
myclouser();
clouser()();







