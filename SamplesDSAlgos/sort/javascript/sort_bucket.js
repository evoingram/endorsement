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


insertionSort = (bucket) => {
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
function bucketSort(originalArray, bucketSize) {
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

x = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
console.log(`Original Array is ${x.toString()}`)
console.log(`Sorted Array is ${bucketSort(x).toString()}`)

// https://initjs.org/bucket-sort-in-javascript-dc040b8f0058 for bucketSort portion
