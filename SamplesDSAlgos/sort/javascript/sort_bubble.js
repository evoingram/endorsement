
// os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
// exec(open("iterative_sorting.py").read())

// BUBBLE SORT:
    // loop through array and compare each index with index next to it
    // if out of order, swap them
    // loop over array until everything in place AND 
        // nothing swapped during last iteration

// time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
// space complexity:  O(1)

bubbleSort1 = (arr) => {
    // get number of items in array
    let arrLength = arr.count;
    // get index of next to last item
    let nextToLast = arr.length - 2;
    let swapped, yValue, nextYValue;
    // loop x through 0 to one before end
    for (let x = 0; x < nextToLast; x ++) {
        // swapped starts out false
        swapped = false
        // loop y through 0 to one before end
        for (let y = 0; y < nextToLast; y ++) {
            // compare current and next items
                // if current item larger than next, swap
            if (arr[y] > arr[y+1]) {
                // swap current and next items
                yValue = arr[y]
                nextYValue = arr[y+1]
                arr[y] = nextYValue
                arr[y+1] = yValue
                // set swapped to true
                swapped = true
            }
        }
        // if no number was swapped that means array is sorted now, break the loop.
        if (swapped == false) break
    }
    // return sorted array
    return arr
}

bubbleSort2 = (arrayToSort) => {
    let nextToLast = arrayToSort.length - 2;
    let swapped, yValue, nextYValue;
    for (let x = 0; x < nextToLast; x ++) {
        swapped = false;
        for (let y = 0; y < nextToLast; y ++) {
            if (arrayToSort[y] > arrayToSort[y+1]) {
                yValue = arrayToSort[y];
                nextYValue = arrayToSort[y+1];
                arrayToSort[y] = nextYValue;
                arrayToSort[y+1] = yValue;
                swapped = true;
            }
        }
        if (swapped == false) break;
    }
    return arrayToSort;
}

bubbleSort3 = (arrayToSort) => {
    let nextToLast = arrayToSort.length - 2;
    let swapped, yValue, nextYValue;
    for (let x = 0; x < nextToLast; x++) {
        swapped = false;
        for (let y = 0; y < nextToLast; y++) {
            if (arrayToSort[y] > arrayToSort[y+1]) {
                yValue = arrayToSort[y];
                nextYValue = arrayToSort[y+1];
                arrayToSort[y] = nextYValue;
                arrayToSort[y+1] = yValue;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    return arrayToSort;
}
bubbleSort4 = (toSort) => {
    let nextToLast = toSort.length - 2;
    let swapped, yVal, nextYVal;
    for (let x = 0; x < nextToLast; x++) {
        swapped = false;
        for (let y = 0; y < nextToLast; y++) {
            if (toSort[y] > toSort[y+1]) {
                yVal = toSort[y];
                nextYVal = toSort[y+1];
                toSort[y] = nextYVal;
                toSort[y+1] = yVal;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    return toSort;
}
bubbleSort = (toSort) => {
    let n2last = toSort.length - 2;
    let swapped, yVal, nextYVal;
    for (let x = 0; x < n2last; x++) {
        swapped = false;
        for (let y = 0; y < n2last; y++) {
            if (toSort[y] > toSort[y+1]) {
                yVal = toSort[y];
                nextYVal = toSort[y+1];
                toSort[y] = nextYVal;
                toSort[y+1] = yVal;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    return toSort;
}

let testArray = bubbleSort([0,2,4,6,100,8,7,9,3,5,1]);
console.log(testArray);