let userdetails ={
    name:"john",
    age:19,
    profile:"engineer"
}
let printdetail = function prinfun(profession) {
    console.log(this.name +" "+ profession+ " ")
}
// console.log(printdetail);
//here store the function bind in var
let newprintdetail=printdetail.bind(userdetails,"engineer");

// console.log(newprintdetail);
newprintdetail(); //invoke the funtion where u needed
