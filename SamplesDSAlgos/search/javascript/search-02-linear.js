
// LINEAR SEARCH
// go line by line, one item by one item & check value at that index
// when found, stop
// simplest; only useful if list you're searching is unsorted

// time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
// space complexity:  O(1)
/*
   procedure linear_search (arr, target)
      for each item in arr:
         if match item == target:
            return the item's location
   end procedure
*/

linearSearch1 = (arr, target) => {
   for (let x = 0; x < arr.length; x++) if (arr[x] === target) return x;
   return -1;
}

linearSearch2 = (arr, target) => {
   for (let x = 0; x < arr.length - 1; x++) if (arr[x] === target) return x;
   return false;
}

linearSearch3 = (arr, target) => {
   for (let x = 0; x < arr.length - 1; x++) if (arr[x] === target) return x;
   return false;
};

let linearSearch = (arr, target) => {
   for (let x = 0; x < arr.length; x++) if (arr[x] === target) return x;
   return -1;
};

// linearSearch = (arr, target) = {};


array = [4, 22, 41, 40, 27, 30, 36, 16, 42, 37, 14, 39, 3, 6, 34, 9, 21, 2, 29, 47]
console.log(`original array:  ${array}`);
console.log(`find 40 (index 3):  ${linearSearch(array, 40)}`);
console.log(`find 39 (index 11):  ${linearSearch(array, 39)}`);
console.log(`find 34 (index 14):  ${linearSearch(array, 34)}`);
console.log(`find 36 (index 6):  ${linearSearch(array, 36)}`);
console.log(`find 35 (not in array):  ${linearSearch(array, 35)}`);
console.log(`find 50 (not in array):  ${linearSearch(array, 50)}`);