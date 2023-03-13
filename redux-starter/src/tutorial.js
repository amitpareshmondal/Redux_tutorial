import {compose,pipe} from "lodash/fp";
let input="   JavaScript   ";
const trim=str=> str.trim();
const wrapindiv=str=> `<div>${str}<div>`;
const toLowerCase=str=>str.toLowerCase();
// Functional Composition
const result=wrapindiv(toLowerCase(trim(input)));
//With Compose 
const resultwithCompose=compose(wrapindiv,toLowerCase,trim);
resultwithCompose(input);
//with PIPE 
const resultwithPipe=compose(trim,toLowerCase,wrapindiv);
resultwithPipe(input);
//Currying 
function add(a){
    return function (b){
        return a+b;
    }
}
console.log(add(1)(2));
// A pure function in javascript returns the same output when same arguments are passed to it anytime
// Below is a pure function which returns the same value everytime on same input
function adding(a,b){
    return a+b;
}
// The below is not a pure function because its value would change even if we give same input
function adding1(a){
    return a*Math.random();
}
//Update objects in JS 
const obj1={
    name:"Amit",
    age:21,
    address:{
        country:"India",
        city:"Nagpur"
    }
}
const obj2={...obj1,age:24};
obj2.name="Modiji";
//the below line will also change the address in obj1 because the spread operator makes a shallow copy and not a deep i.e the other 
//parameters will have different address in both the objects, but the object( Nested obejcts ) will have the same address
// and in order to make a deep copy we can do something like below 
//obj2={...obj1,address:{...obj1.address,[any changes you need]}}
obj2.address.country="Pakistan";
console.log(obj1);
console.log(obj2);
//Updating Arrays 
const numbers=[1,2,3,4];
//adding 
const numbers1=[...numbers];
console.log(numbers1);
// suppose we need to add till 3 and then add then add 5 and then continue to add 4 
const index=numbers.indexOf(2);
const numbers2=[...numbers.slice(0,index),5,...numbers.slice(index)];
console.log(numbers2);

//delete 
const remove =numbers.filter(n=>n!==2);
console.log(remove);
//Updating 
const updated=numbers.map(n=>(n==2)?20:n);
console.log(updated);
// In the later part of the tutorial we were introduced with immutable js libararies like immutable and immer