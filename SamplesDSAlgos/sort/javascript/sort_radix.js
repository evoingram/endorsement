/*
Radix Sort is a non-comparative sorting algorithm with asymptotic complexity O(nd). 
It is one of the most efficient and fastest linear sorting algorithms. 
Radix sort was developed to sort large integers. 
As integer is treated as a string of digits so we can also call it as string 
    sorting algorithm.

So radix sort is efficient than comparison sorting algorithm until the number of
    digits (key) is less than log n. 
Counting sort can’t be used if a range of key value is large (suppose range is 1 to n2) 
    so radix sort is the best choice to sort in linear time.
*/

// RADIX SORT:
// only used to sort numbers
// sort numbers from least to most significant digit
// sort by ones place, then tens place, then hundreds place, etc.
// use count sort as sorting subroutine
// k = number of elements

// linear sorting algorithm.
// not an in-place sorting algorithm as it requires extra additional space
// stable sort as relative order of elements with equal values is maintained
// can be slower than other sorting algorithms like merge and quick sort if 
// operations are not efficient enough. 
// These operations include insert and delete functions of the sub-list &
// the process of isolating the digits we want.
// less flexible than other sorts as it depends on the digits or letter
// needs to be rewritten if the type of data is changed

// time complexity:  Best O(nk)   |   Avg O(nk)   |   Worst O(nk)
// space complexity:  O(n+k)


// Python program for implementation of Radix Sort   
// A function to do counting sort of arr[] according to 
// the digit represented by exp. 

// https://learnersbucket.com/tutorials/algorithms/radix-sort-algorithm-in-javascript/

const countingSort = (arr, size, place) => {
    let output = new Array(size + 1).fill(0);
    let max = Math.max(...arr);
    let freq = new Array(max + 1).fill(0);

    // Calculate count of elements
    for (let i = 0; i < size; i++) {
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
    }

    // Calculate cummulative count
    for (let i = 1; i < 10; i++) freq[i] += freq[i - 1];

    // Place the elements in sorted order
    for (let i = size - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--;
    }

    //Copy the output array
    for (let i = 0; i < size; i++) arr[i] = output[i];
}

const radixSort = (arr, size = arr.length) => {
    // Get the max element
    let max = Math.max(...arr);
    // Sort the array using counting sort
    for (let i = 1; parseInt(max / i) > 0; i *= 10) countingSort(arr, size, i);
}

arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(`Original array is ${arr}`);
radixSort(arr);
console.log(`Sorted array is ${arr}`);

