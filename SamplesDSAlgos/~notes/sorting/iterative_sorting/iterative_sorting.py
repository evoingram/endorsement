
# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())

# BUBBLE SORT:  
    # Always select and move smallest element until all are in order.
# time complexity:   O(n^2)
# space complexity:  O(1)
def selection_sort(arr):
    # get array length and array length - 1
    array_length = len(arr)
    next_to_last = array_length-1

    # loop through n-1 elements
    for x in range(0, next_to_last):
        # set current index
        current_index = x

        # set smallest index as current index
        smallest_index = current_index
        next_index = x + 1

        # loop through array starting at next_index to array length
        for y in range(next_index, array_length):
            # set current item
            current_item_y = arr[y]
            # set smallest item
            smallest_item = arr[smallest_index]
            # compare current and smallest items
                # if current is smallest, set its index as smallest index
            if current_item_y < smallest_item:
                smallest_index = y;

        # swap the minimum element with the current element
        # if smallest index isn't current item
        if smallest_index != x:
            # swap arr[smallest_index] and arr[x]
            # get smallest item
            smallest_item = arr[smallest_index]
            # set current item
            current_item_x = arr[x]
            # set smallest item as current item
            arr[smallest_index] = current_item_x
            # set current item as smallest item
            arr[x] = smallest_item

    # return sorted array
    return arr

# BUBBLE SORT:
    # loop through array and compare each index with index next to it
    # if out of order, swap them
    # loop over array until everything in place AND 
        # nothing swapped during last iteration
# time complexity:  O(n^2)
# space complexity:  O(1)
def bubble_sort(arr):
    # get number of items in array
    length = arr.count
    # get index of next to last item
    next_to_last = len(arr) - 1
    # loop x through 0 to one before end
    for x in range(0, next_to_last):
        # swapped starts out false
        swapped = False
        # loop y through 0 to one before end
        for y in range(0, next_to_last):
            # compare current and next items
                # if current item larger than next, swap
            if arr[y] > arr[y+1]:
                # swap current and next items
                y_value = arr[y]
                next_y_value = arr[y+1]
                arr[y] = next_y_value
                arr[y+1] = y_value
                # set swapped to true
                swapped = True
        # if no number was swapped that means array is sorted now, break the loop.
        if swapped is False:
            break
    # return sorted array
    return arr

# COUNT SORT:
    # get maximum element from array
    # define count array of size [max+1]
    # set all elements in the count array to 0
    # increase count of each number which are found in the array
    # find cumulative frequency
    # store the number in the output array
    # decrease count for same numbers (count[i])
    # return the output array

# time complexity:  O(n+k)
    # O(Maximum key value – Minimum key value), linear
# space complexity:  O(k)
# not an in-place sorting algorithm
# stable sort
# inefficient if range of key value k is very large
# can only sort discrete values like integer
def count_sort(arr, maximum=-1):
    if arr == []:
        return arr 
    # get maximum element from array
    max_element = maximum
    for x in range(0, len(arr)-1):
        # get current item
        current_item = arr[x]
        # if current item > max element, set max as current item
        if current_item > max_element:
            max_element = current_item
        # negative numbers not allowed
        if current_item < 0:
            return "Error, negative numbers not allowed in Count Sort"

    arr_output = [0] * (max_element+1)

    # max = getMax(array, maximum)
    # create count array (max+1 number of elements)
    count = [0] * (max_element+1) 

    for i in range(0, (max_element-1)):
        # initialize count array to all zero
        count[i] = 0

    for i in range(1, maximum):
        # increase number count in count array.
        count[arr[i]] += 1
        
    for i in range(1, max_element - 1):
        # find cumulative frequency
        count[i] += count[i - 1]
        
    for i in range(len(arr)-1, -1, -1):
        if i >= 0:
            x = arr[i]
            y = count[x]
            arr_output[x] = arr[i]
            if count[x] >= 1:
                # decrease count for same numbers
                count[x] -= 1

    arr_difference = int(len(arr_output) - len(arr))

    for i in range((len(arr_output) - 1), -1, -1):
        
        if int(arr_output[i]) == int(0):
            del arr_output[i]

    if int(len(arr_output)) < int(len(arr)):
        arr_output.insert(0, 0)

    return arr_output
