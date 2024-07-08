

// Object.prototype.mydataapp="this my data from proto ";

// Object.prototype.mydatafun=function () {
//     return "this my data from prot "
// };
// console.log(mydataapp.length);
// console.log(mydatafun());
// console.log(students.mydatafun());


//====================================================================  ======================
 // functions call inside the object 
//=====================================================================

// let students = {
//     name :"john",
//     lastname:"doe",
//     dob:1990,
//     getfullname: function() {
//                 return `my name is ${this.name} ${this.lastname}`
//             },
//     getAge:function () {
//                 let age =new Date().getFullYear()-this.dob;
//                 return age;
//             }
  
// }
// let teacher = {
//     name :"alex",
//     lastname:"robert",
//     dob:2000,
//     getfullname: function() {
//                         return `my name is ${this.name} ${this.lastname}`
//                     },
//             getAge:function () {
//                         let age =new Date().getFullYear()-this.dob;
//                         return age;
//                     }
  
// }
// console.log(students.getAge());
// console.log(teacher.getAge());

//=================================================================================
// now use prototype

//==================================================================================

let users ={
    getfullname: function() {
        return `my name is ${this.name} ${this.lastname}`
    },
    getAge:function () {
        let age =new Date().getFullYear()-this.dob;
        return age;
    }
}


let students = {
    name :"john",
    lastname:"doe", // here using  prototype 
    dob:1990,
  
}

let teacher = {
    name :"alex",
    lastname:"robert",
    dob:2000,
    getfullname:users.getfullname, // here without  prototype direct assign properties
    getAge:users.getAge
  
}

students.__proto__ = users;
// // // teacher.__proto__  = users; 
// console.log(students.getfullname(),students.getAge());
// console.log(teacher.getfullname(),teacher.getAge());
// console.log(users.getfullname());




//=====================================================
//=====================================================
//=====================================================



