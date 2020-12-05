const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const problem1 = (array) => {
  let validPassword = 0;
  array.forEach((password) => {
    const splitFrom = /\s|:\s/;
    const [range, letter, pass] = password.split(splitFrom);
    const [min, max] = range.split("-").map((num) => Number(num));
    let c = 0;
    for (let i = 0; i < pass.length; i++) {
      if (pass.charAt(i) === letter) {
        c++;
      }
    }
    if (c <= max && c >= min) {
      validPassword++;
    }
  });
  console.log(validPassword);
};
const problem2 = (array) => {
  let validPassword = 0;
  array.forEach((password) => {
    const splitFrom = /\s|:\s/;
    const [range, letter, pass] = password.split(splitFrom);
    const [pos1, pos2] = range.split("-").map((num) => Number(num));
    if (
      (pass.charAt(pos1 - 1) === letter && pass.charAt(pos2 - 1) !== letter) ||
      (pass.charAt(pos1 - 1) !== letter && pass.charAt(pos2 - 1) === letter)
    ) {
      validPassword++;
    }
  });
  console.log(validPassword);
};
// problem1(input);
problem2(input);
