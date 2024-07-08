
// class student {
//     constructor(n){
//         let name;
//         // this.name=name;
//         console.log("hello constructor js "); //

//     }
//     hello(){
//         console.log("hello" +this.name  ) //
//     }
// }
// let a =new student()
// a.name = " js"
// a.hello();
// console.log(a);

//================================================================================
//=========


class student{
    constructor(name,lname){ //js class
        this.name = name;
        this.lname = lname;
        console.log("constructor Funtion");
    }
    hello(){
     
        console.log("hello " +this.name+ this.lname);
    }

}


let a = new student();
a.name = " js "; // 
a.lname = " class  ";
a.hello();

