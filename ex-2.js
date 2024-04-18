//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= operation) {
      count++;
      if (count >= 5) {
        return true;
      }
    }
  }
  return false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, 70);
let scoreRoom2Result = atLeastFive(studentScoresRoom1, 70);
let scoreRoom3Result= atLeastFive(studentScoresRoom1, 70);

console.log(scoreRoom1Result);