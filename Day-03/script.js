let a = 4;
if(a % 2 == 0){
console.log("even")
}else{
    console.log("odd")
}

let age = 9;
if (age>=18){
    console.log("You are eligible to get a license")
}else{
    console.log("You aren't eligible to get a license")
}

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = annualSalary * 0.20;

let ctc = annualSalary + bonus;

console.log("Annual Salary:", annualSalary);
console.log("Bonus:", bonus);
console.log("Total CTC:", ctc);

let color ="red";

if(color === "red"){
    console.log("STOP");
}
else if(color === "green")
{
    console.log("GO");
}

let units = 10;
let unitsCost = 150;
let days = 30;
let totalBill = units * unitsCost * days
console.log("Total monthly bill :",totalBill)

let annualPayment = (totalBill * 12)*.20;

console.log("AnnualPayment is :",annualPayment)

const year = 2025;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log("The year is a Leap year")
}else{
    console.log("Not a leap year")
}


let p=2;
let q=3;
let r=4;
if(p>=q && p>=r){
    console.log("p is the prime")
}else if(q>=p && q>=r){
    console.log("q is the prime")
}else{
    console.log("r is the prime")
}

let count =5;
let result = count<<1;
console.log(result);
