
// 1. Generate a Pyramid of Stars
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '* ';
    }
    console.log(stars);
}

// 2. Create a Multiplication Table using for loops
let N = 5; 
for (let i = 1; i <= 10; i++) {
    let result = N * i;
    console.log(N + 'x' + i + '=' + result);
}

// 3. Find the Summation of all odd numbers from 1 to 500
let sum = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2!== 0) {
        sum += i;
    }
}
console.log(sum);

// 4.2 Skipping Multiples of 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 5. Reverse Digits of a Number using a while loop

let num = 6789;
let reverse = "";

while (num > 0) {
    reverse = reverse + (num % 10);
    num = parseInt(num / 10);
}
console.log(reverse);

