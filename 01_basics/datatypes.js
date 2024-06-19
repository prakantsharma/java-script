// primitive data-type:7 types(string,number,boolean,null,undefined,symbol,Bigint);
//javascipt is dyamically typed language

// Non-primitive data types:referrence type(Arrays,objects,Functions)
let a=20;
console.log(`a:${a}`);
const id=Symbol('123');
const anotherid=Symbol("123");
console.log(id== anotherid);
//big int -lastmain nlaga dena hai;
// ye array hai bhai
const heroes=['shaktiman',"doga","nagaraj","mohini"];
// ye ek obj hai;
let myobj={
    'name':"prakant ",
    'age':18
}
// using a function as a data-type;
const myfunction=function(){
    console.log("hello prakant");
}
// to know the data-type :- use typeof
let b=20n
console.log(typeof b);
b=null;
console.log(typeof null)// null bhi ek object hai
console.log(typeof myfunction)// ye ek function hai 