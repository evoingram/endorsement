
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
bubbleSort2 = (oa) => {
    let n2l = oa.length - 2;
    let swapped, yVal, nextYval;
    for (let x = 0; x < n2l; x++) {
        swapped = false;
        for (let y = 0; y < n2l; y++) {
            if (oa[y] > oa[y+1]) {
                yVal = oa[y];
                nextYVal = oa[y+1];
                oa[y] = nextYval;
                oa[y+1] = yVal;
                swapped = true;
            }
        }
    }
    return oa;
}

bubbleSort3 = (oa) => {
    let n2l = oa.length - 2;
    let swapped, yval, nyval;
    for (let x = 0; x < n2l; x++) {
        swapped = false;
        for (let y = 0; y < n2l; y++) {
            if (oa[y] > oa[y+1]) {
                yval = oa[y];
                nyval = oa[y+1];
                oa[y] = nyval;
                oa[y+1] = yval;
                swapped = true;
            }
        }
    }
    return oa;
}

bubbleSort = (oa) => {
    let n2l = oa.length - 2;
    let swapped, yv, nyv;
    for (let x = 0; x < n2l; x++) {
        swapped = false;
        for (let y = 0; y < n2l; y++) {
            if (oa[y] > oa[y+1]) {
                yv = oa[y];
                nyv = oa[y+1];
                oa[y] = nyv;
                oa[y+1] = yv;
                swapped = true;
            }
        }
    }
    return oa;
}

// bubbleSort = () => {}

let testArray = bubbleSort([0,2,4,6,100,8,7,9,3,5,1]);
console.log(testArray);