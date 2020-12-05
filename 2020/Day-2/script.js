const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const problem1 = (array) => {
  let validPassword = 0;
  array.forEach((password) => {
    const splitFrom = /\s|:\s/;
    const s = password.split(splitFrom);
    const [min, max] = s[0].split("-").map((num) => Number(num));
    const letter = s[1];
    const pass = s[2];
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

problem1(input);
