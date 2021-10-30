
// BINARY SEARCH
// Only works if array is sorted
// break into halves several times, being able to eliminate halves 
   // quickly to find what you're looking for

// time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
// space complexity:  O(1)

binarySearch = (arr, target) => {
      // arr ← sorted array
      // arrLength ← size of array
      // target ← value to be searched
      let arrLength = arr.length
      let lowerBound = 1
      let upperBound = arrLength
      while (true) {
         if (upperBound < lowerBound) return -1
         let midPoint = Number(lowerBound + (upperBound - lowerBound) / 2)
         if (arr[midPoint] < target) lowerBound = midPoint + 1
         if (arr[midPoint] > target) upperBound = midPoint - 1
         if (arr[midPoint] == target) return midPoint
      }
      return -1  // not found
}