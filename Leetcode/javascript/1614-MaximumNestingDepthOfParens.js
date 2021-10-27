let maxDepth = (stringToCheck) => {
    let maxDepth = 0;
    let storage = [];

    for (let x = 0; x < stringToCheck.length; x++) {
        if (stringToCheck[x] === '(') storage.push('(')
        if (stringToCheck[x] === ')' && storage[storage.length - 1] === '(') {
            maxDepth = Math.max(maxDepth, storage.length)
            storage.pop();
        }
    }
    return maxDepth;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("1+(2*3)/(2-1)"));
console.log(maxDepth("1"));
// console.log(maxDepth());