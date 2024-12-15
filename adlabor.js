let array = [1, 3, 5, 7, 9];
let k = 5; // Element we're searching for
let left = 0;
let right = array.length - 1;

while (left <= right) {
    let j = Math.floor((left + right) / 2);
    if (array[j] === k) {
        console.log(`Found ${k} at index ${j}`);
        break;
    } else if (k < array[j]) {
        right = j - 1; // Adjust right boundary
    } else {
        left = j + 1; // Adjust left boundary
    }
}

if (left > right) {
    console.log(`${k} not found in the array.`);
}
