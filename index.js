/** 
 Write a function that accepts an array of users and returns the array with the users sorted in the following order:
 1. Females first
 2. Ascending order of age
*/

// O(N) space
// O(NlogN) time
function transformer(arg) {
  let women = [];
  let men = [];

  for (let i = 0; i < arg.length; i++) {
    let person = arg[i];
    if (person.sex == "F") {
      women.push(person);
    } else {
      men.push(person);
    }
  }
  women.sort(compFunc);
  men.sort(compFunc);
  
  let result = women.concat(men);
  return result;
}
//comparison function
function compFunc(a, b) {
  return a.age - b.age;
}

/* Second Solution
function transformer2(arg) {
  // your code goes here
  return arg.sort((a, b) => {
    if (a.sex === b.sex) {
      return a.age - b.age;
    } else if (a.sex === "F") {
      return -1;
    } else {
      return 1;
    }
  });
}*/

const data = [
  { name: "segun", age: 33, sex: "M" },
  { name: "ifeoma", age: 29, sex: "F" },
  { name: "somto", age: 25, sex: "F" },
  { name: "femi", age: 23, sex: "M" },
  { name: "brammy", age: 36, sex: "M" },
];

console.log(transformer(data));


/** 
 RESULT
[
  { name: 'somto', age: 25, sex: 'F' },
  { name: 'ifeoma', age: 29, sex: 'F' },
  { name: 'femi', age: 23, sex: 'M' },
  { name: 'segun', age: 33, sex: 'M' },
  { name: 'brammy', age: 36, sex: 'M' },
]
*/
