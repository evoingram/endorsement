
// LINEAR SEARCH
// go line by line, one item by one item & check value at that index
// when found, stop
// simplest; only useful if list you're searching is unsorted
    
// time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
// space complexity:  O(1)

linearSearch = (arr, target) => {
   /*
      procedure linear_search (arr, target)
         for each item in arr:
            if match item == target:
               return the item's location
      end procedure
   */
  for (let x = 0; x < arr.length; x++) if (arr[x] == target) return x
   return -1   // not found
}