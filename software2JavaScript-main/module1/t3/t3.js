'use strict';

// unary operator + converts to number

const a = +prompt("Enter first name")
const b = +prompt("Enter second name")
const c = +prompt("Enter third name")

const sum = 0;
const product = a * b * c;
const average = (a + b + c) / 3;

document.querySelector("#sum").innerHTML = `Sum of ${a}, ${b} and ${c}: ${sum}`;
document.querySelector("#average").innerHTML = `Average of ${a}, ${b} and ${c}: ${average.toFixed(2)}`;
document.querySelector("#product").innerHTML = `Product of ${a}, ${b} and ${c}: ${product}`;