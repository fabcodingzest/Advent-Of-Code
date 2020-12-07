const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

// const staticWay = (array) => {
//   let arr = array.slice(1);
//   let treesEncountered = 0;
//   let position = 0;
//   arr.forEach((way) => {
//     position += 3;
//     if (position >= way.length) {
//       position = position - way.length;
//     }
//     if (position < way.length) {
//       if (way.charAt(position) === "#") {
//         treesEncountered++;
//       }
//     }
//   });
//   return treesEncountered;
// };

const DynamicWay = (right, down) => {
  let treesEncountered = 0;
  let position = 0;
  for (let i = down; i < input.length; i += down) {
    let way = input[i];
    position += right;
    if (position >= way.length) {
      position = position - way.length;
    }
    if (position < way.length) {
      if (way[position] === "#") {
        treesEncountered++;
      }
    }
  }
  return treesEncountered;
};

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const Product = (slopes) => {
  let result = [];
  slopes.forEach((slope) => {
    const s = DynamicWay(...slope);
    result.push(s);
  });
  return result.reduce((acc, curr) => acc * curr);
};

console.log(DynamicWay(3, 1));
console.log(Product(slopes));
