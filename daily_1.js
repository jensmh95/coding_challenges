//Daily Coding Problem: Problem #1 [Easy]

//Good morning! Here's your coding interview problem for today.

//This problem was recently asked by Google.

//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

//Bonus: Can you do this in one pass?

const addingNumbers = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]} + ${arr[j]}`);
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
};

const test_one = addingNumbers([10, 15, 3, 7], 17); // true
const test_two = addingNumbers([100, 251, 300, 249], 500); // true
const test_three = addingNumbers([1, 2, 3, 4, 5], 10); // false
const test_four = addingNumbers([10, 20, 30, 40, 50], 8); // false
const test_five = addingNumbers([1, 10, 0], 10); // true
const test_six = addingNumbers([-1, 11, 0], 10); // true

console.log(test_one);
console.log(test_two);
console.log(test_three);
console.log(test_four);
console.log(test_five);
console.log(test_six);
