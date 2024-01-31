/*
//1]
const orderList=[
    {name:"laptop", price : 120000},
    {name:"mobile", price : 70000},
    {name:"mobile charger", price : 1500},
    {name:"laptop charger", price : 10500},
    
];
let sum=0;
orderList.forEach(data => {
    sum+=data.price;
});
console.log(`Total price is ${sum}`);

//-------------------------------------------------------------------
//2]
function randomNumGen(){
    const random=Math.floor(Math.random()*100)
    console.log(random);
}

function printWithInter(){
    randomNumGen();
    setInterval(randomNumGen,2000);
}
printWithInter();


//-------------------------------------------------------------------
//3]

let expenses=[
    {amount:100,caategort:"utilities"},
    {amount:200,caategort:"groceries"},
    {amount:50,caategort:"entertainment"}
];

let expanseWithTax=expenses.map((expense)=>{
    let tax=expense.amount*0.1;
    return{...expense,tax:tax};

});
console.log("expenses with tax:",expanseWithTax);

//-------------------------------------------------------------------
//4]

let expenses=[
    {amount:100,category:"utilities"},
    {amount:200,category:"groceries"},
    {amount:50,category:"entertainment"}
];

let grocerieOnlyExpense=expenses.filter(
    (expense)=>expense.category==="groceries"
);

console.log("groceries expense:",grocerieOnlyExpense)



//-------------------------------------------------------------------
//5]

let expenses=[
    {amount:100,category:"utilities"},
    {amount:200,category:"groceries"},
    {amount:50,category:"entertainment"}
];

let totalExpense=expenses.reduce((acc,expense)=>acc+=expense.amount,0);

console.log("total expense:",totalExpense);


//-------------------------------------------------------------------
//6]

let expenses=[
    {amount:100,category:"utilities"},
    {amount:200,category:"groceries"},
    {amount:50,category:"entertainment"}
];

function categorizeExpense(expense){
    if(expense.amount>100){
        return "high expense";
    }else{
        return "low expense";
    }
};

let categorizedExpense=expenses.map((expense)=>
categorizeExpense(expense));


console.log("categorizedExpense:",categorizedExpense);



//-------------------------------------------------------------------
//7]

let originalNum=[1,2,3,4,5];

originalNum.forEach((num,index,array)=>{
    array[index]=num*2;
})
console.log("originalNum :",originalNum);

*/

//-------------------------------------------------------------------
//8]

let originalNum=[];

originalNum.forEach(num=>{
    if(num%2==0){
        originalNum.push(num)
    }
});
console.log("originalNum :",originalNum);
