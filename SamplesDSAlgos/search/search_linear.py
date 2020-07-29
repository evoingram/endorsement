def linear_search(arr, target):
   '''
      procedure linear_search (arr, target)
         for each item in arr:
            if match item == target:
               return the item's location
      end procedure
   '''
   for item in range(len(arr)):
      if arr[item] == target:
         return item
   return -1   # not found
