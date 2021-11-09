// Divide and conquer

// when writing a recursive algorithm
    // 1. what's our base/terminating case(s)?
    // 2. if we aren't in the base case, 
        // how are moving towards the base case(s)?

// QUICK SORT
    // choose pivot
    // rearrange everything according to its relationship with pivot
    // sort into 2 lists and resort until done
    // works better when pivot is in middle or random
    // recursive
    // better with runtimes than many iterative solutions

// time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n^2)
// space complexity:  O(log(n))


quickSort1 = (originalArray) => {
    if (originalArray.length < 2) return originalArray;
    const floorParam = Math.random() * originalArray.length;
    const originalArrayFloor = Math.floor(floorParam);
    const pivot = originalArray[originalArrayFloor];

    let left = []; right = []; equal = [];

    for (let currentValue of originalArray) {
        if (currentValue < pivot) left.push(currentValue);
        else if (currentValue > pivot) right.push(currentValue);
        else equal.push(currentValue);
    }
    return [
        ...quickSort(left),
        ...equal,
        ...quickSort(right)
    ];
}

quickSort2 = (oArray) => {
    if (oArray.length < 2) return oArray;
    const floorParam = Math.random() * oArray.length;
    let oArrayFloor = Math.floor(floorParam);
    const pivot = oArray[oArrayFloor];
    let left = [], right = [], equal = [];

    for (let curVal of oArray) {
        if (curVal < pivot) left.push(curVal)
        else if (curVal > pivot) right.push(curVal)
        else equal.push(curVal)
    }
    return [
        ...quickSort(left),
        equal,
        ...quickSort(right)
    ]
}

quickSort3 = (oArray) => {
    if (oArray.length < 2) return oArray;
    const floorParam = Math.random() * oArray.length;
    let oArrayFloor = Math.floor(floorParam);
    const pivot = oArray[oArrayFloor];
    let left = [], right = [], equal = [];
    for (let curVal of oArray) {
        if (curVal < pivot) left.push(curVal)
        else if (curVal > pivot) right.push(curVal)
        else equal.push(curVal);
    }
    return [
        ...quickSort(left),
        equal,
        ...quickSort(right)
    ]
}

quickSort4 = (oArr) => {
    if (oArr.length < 2) return oArr;
    const floorParam = Math.random() * oArr.length;
    let oArrFl = Math.floor(floorParam);
    const pivot = oArr[oArrFl];
    let left = [], right = [], equal = [];
    for (let curVal of oArr) {
        if (curVal < pivot) left.push(curVal)
        else if (curVal > pivot) right.push(curVal)
        else equal.push(curVal);
    }
    return [
        ...quickSort(left),
        equal,
        ...quickSort(right)
    ];
}

quickSort = (oArr) => {
    if (oArr.length < 2) return oArr;
    const flParam = Math.random() * oArr.length;
    let oArrFl = Math.floor(flParam);
    const pivot = oArr[oArrFl];
    let left = [], right = [], equal = [];
    for (let curVal of oArr) {
        if (curVal < pivot) left.push(curVal)
        else if (curVal > pivot) right.push(curVal)
        else equal.push(curVal);
    }
    return [
        ...quickSort(left),
        equal,
        ...quickSort(right)
    ]
}

let items = [5, 3, 7, 6, 2, 9];
console.log(`Original Array is ${items}`);
let sortedArray = quickSort(items);
console.log(`sorted array =    ${sortedArray}`); //prints [2,3,5,6,7,9]