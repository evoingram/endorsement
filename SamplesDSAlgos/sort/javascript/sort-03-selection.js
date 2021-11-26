
// os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
// exec(open("iterative_sorting.py").read())

// SELECTION SORT:  
    // Always select and move smallest element until all are in order.
    
// time complexity:  Best O(n^2)   |   Avg O(n^2)   |   Worst O(n^2)
// space complexity:  O(1)

selectionSort1 = (originalArray) => {
    // get array length and array length - 1
    let arrayLength = originalArray.length;
    let nextToLast = arrayLength-1
    let currentIndex, smallestIndex, nextIndex, currentItemX, currentItemY, smallestItem;
    // loop through n-1 elements
    for (let x = 0; x < nextToLast; x++) {
    // for (x in range(0, nextToLast)) {
        // set current index
        currentIndex = x

        // set smallest index as current index
        smallestIndex = currentIndex
        nextIndex = x + 1

        // loop through array starting at nextIndex to array length
        for (let y = nextIndex; y < arrayLength; y++) {
            // set current item
            currentItemY = originalArray[y]
            // set smallest item
            smallestItem = originalArray[smallestIndex]
            // compare current and smallest items
                // if current is smallest, set its index as smallest index
            if (currentItemY < smallestItem) smallestIndex = y;
        }

        // swap the minimum element with the current element
        // if smallest index isn't current item
        if (smallestIndex != x) {
            // swap arr[smallestIndex] and arr[x]
            // get smallest item
            smallestItem = originalArray[smallestIndex]
            // set current item
            currentItemX = originalArray[x]
            // set smallest item as current item
            originalArray[smallestIndex] = currentItemX
            // set current item as smallest item
            originalArray[x] = smallestItem
        }
    }
    // return sorted array
    return originalArray
}
selectionSort2 = (oa) => {
    let ci, si, nexti, xcitem, ycitem, smallestitem;
    for (let x = 0; x < oa.length; x++) {
        ci = x;
        si = ci;
        nexti = x + 1;
        for(let y = nexti; y < oa.length; y++) {
            ycitem = oa[y];
            smallestitem = oa[si];
            if(ycitem < smallestitem) si = y;
        };
        if (si !== x) {
            smallestitem = oa[si];
            xcitem = oa[x];
            oa[si] = xcitem;
            oa[x] = smallestitem;
        }
    }
    return oa;
}

selectionSort3 = (oa) => {
    let ci, si, ni, xcitem, ycitem, smallestitem;
    for(let x = 0; x < oa.length; x++) {
        ci = x;
        si = ci;
        ni = x + 1;
        for (let y = ni; y < oa.length; y++) {
            ycitem = oa[y];
            smallestitem = oa[si];
            if (ycitem < smallestitem) si = y;
        };
        if (si !== x) {
            smallestitem = oa[si];
            xcitem = oa[x];
            oa[si] = xcitem;
            oa[x] = smallestitem;
        }
    }
    return oa;
}

selectionSort4 = (oa) => {
    let ci, si, ni, xcitem, ycitem, smallestitem;
    for (let x = 0; x < oa.length; x++) {
        ci = x;
        si = ci;
        ni = x + 1;
        for (let y = ni; y < oa.length; y++) {
            ycitem = oa[y];
            smallestitem = oa[si];
            if (ycitem < smallestitem) si = y;
        };
        if (si !== x) {
            smallestitem = oa[si];
            xcitem = oa[x];
            oa[si] = xcitem;
            oa[x] = smallestitem;
        }
    }
    return oa;
}

selectionSort = (oa) => {
    let ci, si, ni, xcitem, ycitem, smallestitem;
    for (let x = 0; x < oa.length; x++) {
        ci = x;
        si = ci;
        ni = x + 1;
        for (let y = ni; y < oa.length; y++) {
            ycitem = oa[y];
            smallestitem = oa[si];
            if (ycitem < smallestitem) si = y;
        }
        if (si !== x) {
            smallestitem = oa[si];
            xcitem = oa[x];
            oa[si] = xcitem;
            oa[x] = smallestitem;
        }
    }
    return oa;
}

// selectionSort = (oa) => {}

var inputArr = [2, 7, 9, 1, 8, 0, 6, 5, 3, 4];
console.log(`Here is the input array:   ${inputArr}`);
selectionSort(inputArr);
console.log(`Here is the sorted array:  ${inputArr}`);