//* The Fibonacci series are numbers that include the sum of two consecutive numbers. If we consider the first element of our numbers as 0 and the second element as 1: the sum of the first two elements is 1. The number before 1 is 1, 1 + 1 = 2, and to obtain the next number, the numbers follow each other as 5, 8, 13 in the pattern 1 + 2 = 3.

// * Fibonacci series - 0, 1, 1, 2, 3, 5, 8, 13 …… Given an integer, n. Find the nth Fibonacci number.


let x = [0, 1, 1];

let y = 10;

function fibonacci(){
    for (let i = 0; i < y; i++) {
    let z = x[x.length-1] + x[x.length-2];
    x.push(z);
} return x;
}

console.log(fibonacci());

