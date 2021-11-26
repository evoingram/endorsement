
// BINARY SEARCH
// Only works if array is sorted
// break into halves several times, being able to eliminate halves 
// quickly to find what you're looking for

// time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
// space complexity:  O(1)

binarySearch1 = (arr, target) => {
   let start = 0; end = arr.length - 1;
   while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return true
      else if (arr[mid] < target) start = mid + 1;
      else end = mid - 1;
   }
   return false;
}

binarySearch2 = (arr, target) => {
   let start = 0, end = arr.length - 1;
   while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return true
      else if (arr[mid] < target) start = mid + 1
      else end = mid - 1;
   }
   return false;
}

binarySearch3 = (arr, target) => {
   let start = 0, end = arr.length - 1;
   while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return true
      else if (arr[mid] < target) start = mid + 1
      else end = mid - 1;
   }
   return false;
}

binarySearch = (arr, target) => {
   let start = 0, end = arr.length - 1;
   while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return true
      else if (arr[mid] < target) start = mid + 1
      else end = mid - 1;
   }
   return false;
}

// binarySearch = (arr, target) => {}

array = [2, 3, 4, 6, 9, 14, 16, 21, 22, 27, 29, 30, 34, 36, 37, 39, 40, 41, 42, 47]
console.log(`original array:  ${array}`);
console.log(`find 40, true:  ${binarySearch(array, 40)}`)
console.log(`find 36, true:  ${binarySearch(array, 36)}`);
console.log(`find 1, false:  ${binarySearch(array, 1)}`);
console.log(`find 5, false:  ${binarySearch(array, 5)}`);
console.log(`find 35, false:  ${binarySearch(array, 35)}`);
