const operations = {
  ceil: Math.ceil,
  floor: Math.floor,
  round: Math.round
};

function performOperation(operationName, value) {
  const operation = operations[operationName];
  if (operation) {
    return operation(value);
  } else {
    throw new Error('Unsupported operation');
  }
}

console.log(performOperation('ceil', 4.2));  // Output: 5
console.log(performOperation('floor', 4.9)); // Output: 4
console.log(performOperation('round', 4.5)); // Output: 5
