"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = -20;
console.log(document.querySelector(".guess").value);
