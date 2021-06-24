let mixedValue = [1, 2, 3, 3, 3, 3, 3, 55555, 5555, 55555];
let uniqueValue = [...new Set(mixedValue)];
console.log(uniqueValue);