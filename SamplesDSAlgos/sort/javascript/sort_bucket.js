// https://initjs.org/bucket-sort-in-javascript-dc040b8f0058 for bucketSort portion

/*
How do we sort the numbers efficiently?

    A simple way is to apply a comparison based sorting algorithm. 
    The lower bound for comparison-based sorting algorithm (merge, heap, quick,
        etc.) is Ω(n Log n), can't do better than n log n.

Count sort can't be used as we use keys as index in count sort. 
Here keys are floating point numbers. 
*/

// BUCKET SORT

    // mainly useful when input is uniformly distributed over a range.
    // buckets created to put elements into
        // number of elements = number of buckets
    // apply insertion sort to each bucket
    // concatenate buckets to get sorted array

// time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n^2)
// space complexity:  O(n)


insertionSort1 = (bucket) => {
    let bucketLength = bucket.length;
    let currentX, currentItem, previousX;
    for (let x = 1; x < bucketLength; x++) {
        // for bucket_index in range(1, bucketLength):
        // get current item in bucket
        currentItem = bucket[x];
        // get previous bucket index
        previousX = x - 1;
        // while previous bucket index is at least 0 AND
        // value of previous bucket item > current bucket item
        while (previousX >= 0 && bucket[previousX] > currentItem) {
            currentX = previousX + 1;
            // set item at current bucket index as value of previous bucket item
            bucket[currentX] = bucket[previousX];
            // subtract one from previous bucket index
            previousX -= 1;
            currentX = previousX + 1;
        }
        // set item at current bucket index as current item
        bucket[currentX] = currentItem;
    }
    // return sorted bucket
    return bucket
}
function bucketSort1(originalArray, bucketSize) {
    if (originalArray.length === 0) return originalArray;

    var i,
        minValue = originalArray[0],
        maxValue = originalArray[0],
        bucketSize = bucketSize || originalArray.length || 5;

    // Setting min and max values
    originalArray.forEach((currentVal) => {
        if (currentVal < minValue) minValue = currentVal;
        else if (currentVal > maxValue) maxValue = currentVal;
    })

    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var bucketHolder = new Array(bucketCount);

    for (i = 0; i < bucketHolder.length; i++) bucketHolder[i] = [];
    let currentMinDifference, floorIndex;

    // put array elements in different buckets
    originalArray.forEach((currentVal) => {
        currentMinDifference = currentVal - minValue;
        floorIndex = Math.floor(currentMinDifference / bucketSize);
        bucketHolder[floorIndex].push(currentVal);
    });

    // sort individual buckets & concatenate the result
    originalArray.length = 0;
    bucketHolder.forEach((bucket) => {
        insertionSort(bucket);
        bucket.forEach((element) => originalArray.push(element));
    });

    return originalArray;
}

insertionSort2 = (bucket) => {
    let bucketLength = bucket.length;
    let currentX, currentItem, previousX;
    for (let x = 1; x < bucketLength; x++) {
        currentItem = bucket[x];
        previousX = x - 1;
        while (previousX >= 0 && bucket[previousX] > currentItem) {
            currentX = previousX + 1;
            bucket[currentX] = bucket[previousX];
            previousX -= 1;
            currentX = previousX + 1;
        }
        bucket[currentX] = currentItem;
    }
    return bucket
}
function bucketSort2(originalArray, bucketSize) {
    if (originalArray.length === 0) return originalArray;
    var i,
        minValue = originalArray[0],
        maxValue = originalArray[0],
        bucketSize = bucketSize || originalArray.length || 5;
    originalArray.forEach((currentVal) => {
        if (currentVal < minValue) minValue = currentVal;
        else if (currentVal > maxValue) maxValue = currentVal;
    })
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var bucketHolder = new Array(bucketCount);
    for (i = 0; i < bucketHolder.length; i++) bucketHolder[i] = [];
    let currentMinDifference, floorIndex;
    originalArray.forEach((currentVal) => {
        currentMinDifference = currentVal - minValue;
        floorIndex = Math.floor(currentMinDifference / bucketSize);
        bucketHolder[floorIndex].push(currentVal);
    });
    originalArray.length = 0;
    bucketHolder.forEach((bucket) => {
        insertionSort(bucket);
        bucket.forEach((element) => originalArray.push(element));
    });
    return originalArray;
}

insertionSort3 = (bucket) => {
    let currX, currItem, prevX;
    for (let x = 1; x < bucket.length; x++) {
        currItem = bucket[x];
        prevX = x-1;
        while (prevX >= 0 && bucket[prevX] > currItem) {
            currX = prevX + 1;
            bucket[currX] = bucket[prevX];
            prevX -= 1;
            currX = prevX + 1;
        }
        bucket[currX] = currItem;
    }
    return bucket;
}

bucketSort3 = (originalArray, bucketSize) => {
    if (originalArray.length === 0) return originalArray;
    var minVal = originalArray[0],
        maxVal = originalArray[0],
        bucketSize = bucketSize || originalArray.length || 5;
        originalArray.forEach(currVal => {
            if (currVal < minVal) minVal = currVal;
            else if (currVal > maxVal) maxVal = currVal;
        });
        let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
        let bucketHolder = new Array(bucketCount);
        for (let x = 0; x < bucketHolder.length; x++) bucketHolder[x] = [];
        let currMinDiff, floorIndex;
        originalArray.forEach(currVal => {
            currMinDiff = currVal - minVal;
            floorIndex = Math.floor(currMinDiff/bucketSize);
            bucketHolder[floorIndex].push(currVal);
        });
        originalArray.length = 0;
        bucketHolder.forEach(bucket => {
            insertionSort(bucket);
            bucket.forEach(element => originalArray.push(element));
        });
        return originalArray;
}

insertionSort4 = (bucket) => {
    let currX, currItem, prevX;
    for (let x = 1; x < bucket.length; x++) {
        currItem = bucket[x];
        prevX = x - 1;
        while (prevX >= 0 && bucket[prevX] > currItem) {
            currX = prevX + 1;
            bucket[currX] = bucket[prevX];
            prevX -= 1;
            currX = prevX + 1;
        }
        bucket[currX] = currItem;
    }
    return bucket;
}

bucketSort4 = (oArray, bSize) => {
    if (oArray.length === 0) return oArray;
    let minVal = oArray[0];
    let maxVal = oArray[0];
    bSize = bSize || oArray.length || 5;
    oArray.forEach(currVal => {
        if (currVal < minVal) minVal = currVal
        else if (currVal > maxVal) maxVal = currVal;
    })
    let bCount = Math.floor((maxVal-minVal) / bSize) + 1;
    let bHolder = new Array(bCount);
    for (let x = 0; x < bHolder.length; x++) bHolder[x] = [];
    let currMinDiff, floorIndex;
    oArray.forEach(currVal => {
        currMinDiff = currVal - minVal;
        floorIndex = Math.floor(currMinDiff/bSize);
        bHolder[floorIndex].push(currVal);
    });
    oArray.length = 0;
    bHolder.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(element => oArray.push(element));
    });
    return oArray;
}

insertionSort = (bucket) => {
    let curX, curItem, prevX;
    for (let x = 1; x < bucket.length; x++) {
        curItem = bucket[x];
        prevX = x - 1;
        while (prevX >= 0 && bucket[prevX] > curItem) {
            curX = prevX + 1;
            bucket[curX] = bucket[prevX];
            prevX -= 1;
            curX = prevX + 1;
        }
        bucket[curX] = curItem;
    }
}
bucketSort = (oArray, bSize) => {
    if (oArray.length === 0) return oArray;
    let minVal = oArray[0];
    let maxVal = oArray[0];
    bSize = bSize || oArray.length || 5;
    oArray.forEach(curVal => {
        if (curVal < minVal) minVal = curVal
        else if (curVal > maxVal) maxVal = curVal;
    })
    let bCount = Math.floor((maxVal - minVal) / bSize) + 1;
    let bHolder = new Array(bCount);
    for(let x = 0; x < bHolder.length; x++) bHolder[x] = [];
    let curMinDif, floorIndex;
    oArray.forEach(curVal => {
        curMinDif = curVal - minVal;
        floorIndex = Math.floor(curMinDif / bSize);
        bHolder[floorIndex].push(curVal);
    })
    oArray.length = 0;
    bHolder.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(element => oArray.push(element));
    })
    return oArray;
}

x = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
console.log(`Original Array is ${x.toString()}`)
console.log(`Sorted Array is ${bucketSort(x).toString()}`)

