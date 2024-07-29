//====================================
//====================================

//forEach();


const coding = ["js","ruby","java","phython","c"];

const values = coding.forEach((item,index,value)=>{
    // console.log(item,index,value) 

    // console.log(value)
    return values;
       
});
//   console.log(value)


// console.log(values); // nrv


//======================================

//================================

// filter();

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const arraynum = myNums.filter((item)=>{
//     return item >6;
// }) 
// console.log(arraynum);
//''''''''''''''''''''''''''''''''

// do with forEach()
// const newarraynum = [];
// myNums.forEach((num) => {
//     if (num>7) {
//         newarraynum.push(num);
//     }
// });
// console.log(myNums);
// console.log(newarraynum);

//===============================
// const shedule = [
//     {title:"lec1",sub:"dsa",lh:104},  
//     {title:"lec1",sub:"web",lh:104},
//     {title:"lec2",sub:"fee",lh:106},
//     {title:"lec3",sub:"web",lh:103}

// ] 


// let usershedule = shedule.filter((sh) =>sh.title === "lec1");

//     usershedule= shedule.filter((sh)=>{
//        return  sh.title === "lec3"
//     });
// console.log(usershedule);
//==================================================


// map======================================

const myNumbers = [1,2,3,4,5];
// const newnums = myNumbers.map((num) => {
//     return num +10
// }) 
// console.log(newnums )


const newnum = myNumbers .map((num)=>num* 10) //10
        .map((num)=>num + 2)
        .filter((num)=> num>=40)

        // console.log(newnum)

//=========================================== 

//reduce


const myreducenum = [1,2,3,4,5];

const mtreducenum = myreducenum.reduce(function (acc,curval)  {
    console.log(`acc: ${acc} and curval ${curval}`);
    return acc+ curval;
},5)
console.log(mtreducenum + "  line no"); //

const shoppingcart =[
    {
        itemname:"web ccourse",

        price:1000
    },
    {
        itemname:"fee",
        price:500
    },
    {
        itemname:"dsa",
        price:600
    }
];
const priceshop = shoppingcart.reduce((acc,item)=>(acc+item.price),0);
// console.log(priceshop); //2100  
