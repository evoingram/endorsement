
# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())

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

# TO-DO:  implement the Bubble Sort function below
def bubble_sort(arr):
    '''
        procedure bubbleSort( arr : array of items )
        length = arr.count;
        for i = 0 to length-1 do:
            swapped = false
            for j = 0 to length-1 do:
                /* compare the adjacent elements */
                if arr[j] > arr[j+1] then
                    /* swap them */
                    swap( arr[j], arr[j+1] )
                    swapped = true
            # if no number was swapped that means array is sorted now, break the loop.*/
            if(not swapped):
                break
        return arr
        end procedure 
    '''
    length = arr.count
    for i in range(0, len(arr) - 1):
        swapped = False
        for j in range(0, len(arr)-1):
            # compare the adjacent elements
            if arr[j] > arr[j+1]:
                # swap them
                # swap(arr[j], arr[j+1])
                j_value = arr[j]
                j1_value = arr[j+1]
                arr[j] = j1_value
                arr[j+1] = j_value
                swapped = True
        # if no number was swapped that means array is sorted now, break the loop.*/
        if swapped is False:
            break
    return arr

    '''
        procedure bubbleSort( list : array of items )
        loop = list.count;
        for i = 0 to loop-1 do:
            swapped = false
            for j = 0 to loop-1 do:
                /* compare the adjacent elements */
                if list[j] > list[j+1] then
                    /* swap them */
                    swap( list[j], list[j+1] )
                    swapped = true
                end if
            end for
            /*if no number was swapped that means
            array is sorted now, break the loop.*/
            if(not swapped) then
                break
            end if
        end for
        end procedure return list
    '''


# STRETCH: implement the Count Sort function below
def count_sort(arr, maximum=-1):
    if arr == []:
        return arr 
    # get maximum element from array
    maxElement = maximum
    for i in range(0, len(arr)-1):
        if arr[i] > maxElement:
            maxElement = arr[i]
        if arr[i] < 0:
            return "Error, negative numbers not allowed in Count Sort"

    arrOutput = [0] * (maxElement+1)
    # max = getMax(array, maximum)
    count = [0] * (maxElement+1) # create count array (max+1 number of elements)

    for i in range(0, (maxElement-1)):
        # initialize count array to all zero
        count[i] = 0

    for i in range(1, maximum):
        # increase number count in count array.
        count[arr[i]] += 1
        
    for i in range(1, maxElement - 1):
        # find cumulative frequency
        count[i] += count[i - 1]
        
    for i in range(len(arr)-1, -1, -1):
        if i >= 0:
            x = arr[i]
            y = count[x]
            arrOutput[x] = arr[i]
            if count[x] >= 1:
                # decrease count for same numbers
                count[x] -= 1

    arrDifference = int(len(arrOutput) - len(arr))

    for i in range((len(arrOutput) - 1), -1, -1):
        
        if int(arrOutput[i]) == int(0):
            del arrOutput[i]

    if int(len(arrOutput)) < int(len(arr)):
        arrOutput.insert(0, 0)

    return arrOutput







    '''
    Begin
        max = get maximum element from array.
        define count array of size [max+1]

        for i := 0 to max:
            count[i] = 0 # set all elements in the count array to 0
        done

        for i := 1 to size:
            increase count of each number which have found in the array
        done

        for i := 1 to max:
            count[i] = count[i] + count[i+1] # find cumulative frequency
        done

        for i := size to 1 decrease by 1 do
            store the number in the output array
            decrease count[i]
        done

        return the output array
    End
    '''

    return arr
