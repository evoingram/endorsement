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
bucketSort2 = (oArray, bSize) => {
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

insertionSort = (bucket) => {
    let cx, ci, px;
    for (let x = 1; x < bucket.length; x++) {
        ci = bucket[x];
        px = x - 1;
        while (px >= 0 && bucket[px] > ci) {
            cx = px + 1;
            bucket[cx] = bucket[px];
            px -= 1;
            cx = px + 1;
        }
        bucket[cx] = ci;
    }
}
bucketSort = (oa, bsize) => {
    if (oa.length === 0) return oa;
    let minval = oa[0];
    let maxval = oa[0];
    bsize = bsize || oa.length || 5;
    oa.forEach(curval => {
        if (curval < minval) minval = curval
        else if (curval > maxval) maxval = curval;
    })
    let bc = Math.floor((maxval - minval) / bsize) + 1;
    let bh = new Array(bc);
    for (let x = 0; x < bh.length; x++) bh[x] = [];
    let cmd, flri;
    oa.forEach(curval => {
        cmd = curval - minval;
        flri = Math.floor(cmd / bsize);
        bh[flri].push(curval);
    });
    oa.length = 0;
    bh.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(element => oa.push(element));
    });
    return oa;
}

// insertionSort = () => {}
// bucketSort = () => {}

x = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
console.log(`Original Array is ${x.toString()}`)
console.log(`Sorted Array is ${bucketSort(x).toString()}`)

