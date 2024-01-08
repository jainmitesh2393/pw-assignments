//Que 1-> 
grade =58
if(grade>90){
    console.log("you get A grade")
}else if(grade>70 && grade<90){
    console.log("You get B grade")
}else if(grade>50 && grade<70){
    console.log("you get C grade")
}else{
    console.log("You get F grade !! fail")
}

//Que 2->
a=10
b=25
while(a<=b){
    console.log(a)
    a++
}

//Que 3->

num=10

//Que 4->In JavaScript, the comma operator , is used to combine multiple 
//expressions into a single expression. 

a = 5, b = 10, c = 15;
let result = (a++, b++, c++);


console.log(a);       
console.log(b);      
console.log(c);      

//Que 5->
username="mitesh"
password=12345

if(username=="mitesh" && password== 12345){
    console.log("login successful")
}else{
    console.log("invalid username or password")
}


//Que 6->
paymentMethod="credit"

switch(paymentMethod){
    case "credit":
        console.log("processing fee : 2%")
        break
    case "debit":
        console.log("processing fee : 1.5%")
        break;
    case "paypal":
        console.log("processing fee : 3%")
        break;
    default:
        console.log("wrong payment method")
}

//Que 7->
weather =45
weather>30?console.log("hot"):console.log("cold")


//Que 8->
i=1
num=10
sum=0
do{
    sum+=i
    i++
}while(i<num)
console.log(sum)