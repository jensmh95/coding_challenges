// Is this shufffled well enough?
// should have no consecutive numbers in either direction

const isShuffledWell = function (arr) {
  // Counter variable to track number of numbers in a row
  let count = 0;
  // Loop input array
  for (let i = 0; i < arr.length; i++) {
    // Checks if the current number plus/minus one is equal to the next or the previous number
    if (arr[i] + 1 === arr[i + 1] || arr[i] - 1 === arr[i + 1]) {
      // If yes, that means we have one consecutive number - and the counter increases
      count++;
      // If the counter reaches more than 1, it means that three numbers in a row are consecutive and returns false
      if (count > 1) return false;
    } else {
      // if the next number is not consecutive then we reset the counter to 0
      count = 0;
    }
  }
  return true;
};

const resultOne = isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]);

const resultTwo = isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]);

const resultThree = isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]);

const resultFour = isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
