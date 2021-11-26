// https://www.geeksforgeeks.org/timsort/

/*
TimSort is a sorting algorithm based on Insertion Sort and Merge Sort.

A stable sorting algorithm works in O(n Log n) time
Used in Java’s Arrays.sort() as well as Python’s sorted() and sort().
First sort small pieces using Insertion Sort, then merges the pieces using 
    merge of merge sort.
We divide the Array into blocks known as Run. 
We sort those runs using insertion sort one by one and then merge those runs 
    using combine function used in merge sort. 
If the size of Array is less than run, then Array get sorted just by using 
    Insertion Sort. 
The size of run may vary from 32 to 64 depending upon the size of the array. 
Note that merge function performs well when sizes subarrays are powers of 2. 
The idea is based on the fact that insertion sort performs well for small arrays.

Recommended: Please try your approach on {IDE} first, before moving on to the solution.
Details of below implementation:

We consider size of run as 32.
We one by one sort pieces of size equal to run
After sorting individual pieces, we merge them one by one. 
We double the size of merged subarrays after every iteration.
*/

// time complexity:  Best O(n)   |   Avg O(n log(n))   |   Worst O(n log(n))
// space complexity:  O(n)

// Python3 program to perform TimSort.  
RUN = 32 
    
// This function sorts array from left index to  
// to right index which is of size atmost RUN  
insertionSort = (originalArray) => {
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
    
// merge function merges the sorted runs  
merge = (originalArray, l, m, r) => {
   
    // original array is broken in two parts  
    // left and right array  
    let len1 =  m - l + 1
    let len2 = r - m  
    let left = []
    let right = []
    for (let x = 0; x < len1; x++) left.append(originalArray[l + x])  
    // for (i in range(0, len1)) left.append(originalArray[l + i])  
    for (let x = 0; x < len2; x++) right.append(originalArray[m + 1 + x])  
    // for (i in range(0, len2)) right.append(originalArray[m + 1 + i])  
    
    let i = 0
    let j = 0
    let k = l 
    // after comparing, we merge those two array  
    // in larger sub array  
    while (i < len1 && j < len2) {  
       
        if (left[i] <= right[j]) {
            originalArray[k] = left[i]  
            i += 1 
        }
        else {
            originalArray[k] = right[j]  
            j += 1 
        }
        k += 1
    }

    // copy remaining elements of left, if any  
    while (i < len1) {
        originalArray[k] = left[i]  
        k += 1 
        i += 1
    }

    // copy remaining element of right, if any  
    while (j < len2) {
        originalArray[k] = right[j]  
        k += 1
        j += 1
    }
}

// iterative Timsort function to sort the  
// array[0...n-1] (similar to merge sort)  
timSort = (originalArray, n) => {
   
    // Sort individual subarrays of size RUN  
    for (i in range(0, n, RUN)) insertionSort(originalArray, i, Math.min((i+31), (n-1)))  
    
    // start merging from size RUN (or 32). It will merge  
    // to form size 64, then 128, 256 and so on ....  
    size = RUN 
    while (size < n) {
       
        // pick starting point of left sub array. We  
        // are going to merge originalArray[left..left+size-1]  
        // and originalArray[left+size, left+2*size-1]  
        // After every merge, we increase left by 2*size  
        for (left in range(0, n, 2*size)) {
           
            // find ending point of left sub array  
            // mid+1 is starting point of right sub array  
            mid = left + size - 1 
            right = Math.min((left + 2*size - 1), (n-1))  
    
            // merge sub array originalArray[left.....mid] &  
            // originalArray[mid+1....right]  
            merge(originalArray, left, mid, right)  
        }

        size = 2*size 
    }
}

// utility function to print the Array  
printArray = (originalArray, n) => {
    for (let x = 0; x < n; x++) console.log(originalArray[x], end = " ")  
    // for (i in range(0, n)) console.log(originalArray[i], end = " ")  
    console.log()  
}

// recreating python range function
// https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

arr = [5, 21, 7, 23, 19];
n = arr.length;
console.log(`Given Array is:`);
printArray(arr, n)
timSort(arr, n)  
console.log("After Sorting Array is")  
printArray(arr, n)  
