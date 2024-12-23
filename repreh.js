let matching = [];
// Assume we have some criteria or data to match against
let data = [1, 2, 3, 4, 5];
let criteria = n => n > 3;

matching = data.filter(criteria);
console.log(matching); // Output: [4, 5]
