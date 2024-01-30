//1]
const square=(n)=>{
    return n*n;
}
console.log(square(4));

//------------------------------------------------------------------------------
//2]
//a]
const ages = [19,22,19,24,20,25,26,24,25,24];
ages.sort((a,b)=>a-b);
console.log(ages);
console.log(ages[0])//min
console.log(ages[9])//max

//b]
const n=ages.length;
if(n%2==0)console.log(ages[n/2]);
else console.log((ages[n/2]+ages[(n/2)+1])/2);

//c]
sum=0;
for(i=0;i<n;i++){
    sum+=(ages[i]);
}
avg=sum/n;
console.log(avg);

//d]
console.log(ages[n-1]-ages[0]);

//e]
console.log((Math.abs(ages[0]-avg))-(Math.abs(ages[n-1]-avg)));

//-------------------------------------------------------------------

//3]
const contactMap=new Map();

contactMap.set("john",{
    age:30,
    email:"john@gmail.com",
    location:"banglore"
});
contactMap.set("rohan",{
    age:14,
    email:"rohan@gmail.com",
    location:"baramati"
});
contactMap.set("mitesh",{
    age:19,
    email:"mitesh@gmail.com",
    location:"ichalkaranji"
});
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("john"));

//-------------------------------------------------------------
//4]
const person1={
    name:"mitesh",
    age:19,
}
const person2={
    name:"piyush",
    age:19,
}

function introduce(){
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} yeas old.`)
}
introduce.call(person2);

//----------------------------------------------------------------
//5]

let uniqueNum=new Set([1,2,3,4,5,1,2]);
let numSqMap=new Map();
uniqueNum.forEach(number =>{
    numSqMap.set(number,number*number);

})
console.log(uniqueNum);

numSqMap.forEach((square,num)=>{
    console.log(`${num}:${square}`);
})

//---------------------------------------------------------------------
//6]
function display(name,role){
    console.log(`name:${name}, Role:${role} `);
}
display.call("mitesh","web developer");

function greet(){
    console.log(`hello,${this.name}`);
}
const x={name:"mitesh"};
const greeting=greet.bind(x);
greeting();

//------------------------------------------------------------------------
//7]
