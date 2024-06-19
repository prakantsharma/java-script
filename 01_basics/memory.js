// chal bhai ab memory ke bare main padhte hain;
// dekh bhai do type ki memory hoti hain:stack(primitive) and heap(non-primitive)
let myname="prakant"
let myanothername=myname;
myname="sakhi"
console.log(myname)
console.log(myanothername)//smjha original main kch fark nahi padta hai

// chal ab heap ki baat karte hain;
let mydetails={
    "name":"prakant shamr",
    "e-mail":"prakantsharma276@gmail.com",
    "id":"1612"
}
let updateddetails=mydetails
updateddetails.email="prakantsharma40@gmail.com"
console.log(updateddetails)
console.log(mydetails)
//e-mail change ho gaya dono main 
// maza aaya

/*
dekh bhai sidhi si baat hai primitive data types jitane bhi hain unmain Stack ka concept lagega
aur jitane bhi non-primitive hain unmain heap ka concept lagega
Stack:provides a copy
heap:provides referrence
*/