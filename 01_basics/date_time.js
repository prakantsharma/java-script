//Dates
let mydate=new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());

let newdate=new Date(2023,0,23);//moth starts from 01
console.log(newdate.toDateString());
//mm-dd-yy
let createdate=new Date("02-14-2024")
console.log(createdate);

let timestamp=Date.now();
console.log(timestamp);
console.log(timestamp.getTime());


