const fs = require("fs");

const input = fs
  .readFileSync("Day-1_Input.txt", "utf-8")
  .split("\n")
  .map((num) => Number(num));

// Problem 1
const sumOfTwo = (numbers, targetSum) => {
  let num1, num2;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length - 1; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        num2 = numbers[j];
        num1 = numbers[i];
        return num1 * num2;
      }
    }
  }
};

const sumOfThree = (numbers, targetSum) => {
  let num1, num2, num3;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length - 1; j++) {
      for (let k = 1; k < numbers.length - 1; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === targetSum) {
          num1 = numbers[i];
          num2 = numbers[j];
          num3 = numbers[k];
          return num1 * num2 * num3;
        }
      }
    }
  }
};
console.log(sumOfTwo(input, 2020));
console.log(sumOfThree(input, 2020));
