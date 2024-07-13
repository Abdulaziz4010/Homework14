// let searchMatrix = function (matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) {
//       }
//     }
//   }
//   return false;
// };

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// );

//

function lengthOfLastWord(s) {
  s = s.trim();

  const words = s.split(" ");

  const lastWord = words[words.length - 1];

  return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));

//

function objectToArray(obj) {
  return Object.entries(obj).map(([key, value]) => key + value);
}

const input = { a: 2, b: 5, c: 7 };
const output = objectToArray(input);

console.log(output);

//
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = nums1.concat(nums2);

  mergedArray.sort((a, b) => a - b);

  let len = mergedArray.length;
  if (len % 2 === 0) {
    return (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
  } else {
    return mergedArray[Math.floor(len / 2)];
  }
};

let nums1 = [1, 2];
let nums2 = [3, 4];
let result1 = findMedianSortedArrays(nums1, nums2);
console.log(result);

//
function getDuplicates(arr) {
  const counts = {};
  const duplicates = [];

  for (let item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  for (let item in counts) {
    if (counts[item] > 1) {
      duplicates.push(item);
    }
  }

  return duplicates;
}

const array = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2, 9, 3];
const result = getDuplicates(array);
console.log(result);

//

let products = [
  { id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];

products = products.filter((product) => product.id !== 4);

console.log(products);

//

let people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

people.sort((a, b) => a.age - b.age);

const youngestAge = people[0].age;
const oldestAge = people[people.length - 1].age;

const ageDifference = oldestAge - youngestAge;

console.log(ageDifference);
