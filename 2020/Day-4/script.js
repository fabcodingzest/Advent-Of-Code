const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split(/\n\n/);
// const input = `
// pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
// hcl:#623a2f

// eyr:2029 ecl:blu cid:129 byr:1989
// iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

// hcl:#888785
// hgt:164cm byr:2001 iyr:2015 cid:88
// pid:545766238 ecl:hzl
// eyr:2022

// iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
// `.split("\n\n");

const problem1 = () => {
  let validPassport = 0;
  let regex = /(?=.*byr)(?=.*iyr)(?=.*eyr)(?=.*hgt)(?=.*hcl)(?=.*ecl)(?=.*pid)/g;

  input.forEach((line) => {
    const str = line.split("\n").join(" ");
    if (str.match(regex)) {
      validPassport++;
    }
  });
  return validPassport;
};

function valid4Digit(str, min, max) {
  const num = Number(str);
  return num >= min && num <= max;
}
function validateHeight(str) {
  const unit = str.slice(-2);
  let height = Number(str.split(/cm|in/g)[0]);
  if (unit === "cm") {
    return height >= 150 && height <= 193;
  }
  if (unit === "in") {
    return height >= 59 && height <= 76;
  }
}
function validateHairColor(str) {
  return str.length === 7 && /^#([a-f]|[0-9])+/g.test(str);
}

const problem2 = () => {
  let validPassport = 0;
  let regex = /(?=.*byr)(?=.*iyr)(?=.*eyr)(?=.*hgt)(?=.*hcl)(?=.*ecl)(?=.*pid)/g;
  console.log(input.length);
  input.forEach((line) => {
    const str = line.split("\n").join(" ");
    if (str.match(regex)) {
      let obj = {};
      let pairs = str.trim().split(" ");
      pairs.forEach((part) => {
        let [key, value] = part.split(":");
        obj[key] = value;
      });
      console.log(obj);
      if (valid4Digit(obj.byr, 1920, 2002)) {
        if (valid4Digit(obj.iyr, 2010, 2020)) {
          if (valid4Digit(obj.eyr, 2020, 2030)) {
            if (validateHeight(obj.hgt)) {
              if (validateHairColor(obj.hcl)) {
                if (
                  obj.ecl.length === 3 &&
                  /(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)/g.test(obj.ecl)
                ) {
                  if (obj.pid.length === 9 && /^[0-9]{9}$/.test(`${obj.pid}`)) {
                    validPassport++;
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  return validPassport;
};

// console.log(problem1());
console.log(problem2());
