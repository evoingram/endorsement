
// INSERTION SORT:
    // Start at beginning of list. 
    // Assume sorted list of length 1 where first element is only sorted element.
    // Grab second element and insert into correct spot in list.
    // Now sorted list length = 2.
    // Continue until unsorted is complete.

// time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
// space complexity:  O(1)

insertionSort1 = (originalArray) => {
    // get array length
    let arrayLength = originalArray.length;
    let currentPosition, currentItem;
    console.log(`original array:  ${originalArray}`)
    // loop from 1 since first element is sorted through end of array
    for (let index = 1; index < arrayLength; index++) {

        // set current item as value in array[index]
        currentItem = originalArray[index]
        // set current position as current index
        currentPosition = index

        // while current position is at least 1 and previous item's value is larger 
            // than current item
        while (currentPosition > 0 && originalArray[currentPosition - 1] > currentItem) {
            // set value at current position as previous position
            originalArray[currentPosition] = originalArray[currentPosition -1]
            // set current position as previous position
            currentPosition = currentPosition - 1
        }

        // set value of current position as current item
        originalArray[currentPosition] = currentItem
    }
    return originalArray
}
insertionSort2 = (oArray) => {
    let cPosition, cItem;
    for (let index = 1; index < oArray.length; index++) {
        cItem = oArray[index];
        cPosition = index;
        while (cPosition > 0 && oArray[cPosition - 1] > cItem) { 
            oArray[cPosition] = oArray[cPosition - 1];
            cPosition = cPosition - 1;
        }
        oArray[cPosition] = cItem;
    }
    return oArray;
}
insertionSort3 = (oArr) => {
    let cPosition, cItem;
    for (let index = 1; index < oArr.length; index++) {
        cItem = oArr[index];
        cPosition = index;
        while (cPosition > 0 && oArr[cPosition - 1] > cItem) {
            oArr[cPosition] = oArr[cPosition - 1];
            cPosition = cPosition - 1;
        }
        oArr[cPosition] = cItem;
    }
    return oArr;
}
insertionSort4 = (oArr) => {
    let cPos, cItem;
    for (let index = 1; index < oArr.length; index++) {
        cItem = oArr[index];
        cPos = index;
        while(cPos > 0 && oArr[cPos - 1] > cItem) {
            oArr[cPos] = oArr[cPos - 1];
            cPos = cPos - 1;
        }
        oArr[cPos] = cItem;
    }
    return oArr;
}

insertionSort = (oa) => {
    let cpos, citem;
    for (let index = 1; index < oa.length; index++) {
        citem = oa[index];
        cpos = index;
        while (cpos > 0 && oa[cpos - 1] > citem) {
            oa[cpos] = oa[cpos - 1];
            cpos -= 1;
        }
        oa[cpos] = citem;
    }
    return oa;
}

// insertionSort = (oa) => {}
array = [4, 22, 41, 40, 27, 30, 36, 16, 42, 37, 14, 39, 3, 6, 34, 9, 21, 2, 29, 47]
console.log(`original array:  ${array}`);
insertionSort(array);
console.log(`sorted array:  ${array}`) ;