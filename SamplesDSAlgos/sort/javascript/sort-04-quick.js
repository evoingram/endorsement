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
quickSort = (oa) => {
    if (oa.length < 2) return oa;
    const flp = Math.random() * oa.length;
    const oafl = Math.floor(flp);
    const pivot = oa[oafl];
    let left = []; let right = []; let equal = [];
    for (let curval of oa) {
        if (curval < pivot) left.push(curval)
        else if (curval > pivot) right.push(curval)
        else equal.push(curval);
    }
    return [
        ...quickSort(left),
        equal,
        ...quickSort(right)
    ]
}

// quickSort = (oa) => {}

let items = [5, 3, 7, 6, 2, 9];
console.log(`Original Array is ${items}`);
let sortedArray = quickSort(items);
console.log(`sorted array =    ${sortedArray}`); //prints [2,3,5,6,7,9]