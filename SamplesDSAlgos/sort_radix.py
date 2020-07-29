'''
Radix Sort is a non-comparative sorting algorithm with asymptotic complexity O(nd). It is one of the most efficient and fastest linear sorting algorithms. Radix sort was developed to sort large integers. As integer is treated as a string of digits so we can also call it as string sorting algorithm.

The lower bound for comparison based sorting algorithm is O(n*log n) like merge sort, quick sort, heap sort. So radix sort is efficient than comparison sorting algorithm until the number of digits (key) is less than log n. Counting sort can’t be used if a range of key value is large (suppose range is 1 to n2) so radix sort is the best choice to sort in linear time.

In radix sort, we first sort the elements based on last digit (least significant digit). Then the result is again sorted by second digit, continue this process for all digits until we reach most significant digit. We use counting sort to sort elements of every digit, so time complexity is O(nd).

Here are some key points of radix sort algorithm –

Radix Sort is a linear sorting algorithm.
Time complexity of Radix Sort is O(nd), where n is the size of array and d is the number of digits in the largest number.
It is not an in-place sorting algorithm as it requires extra additional space.
Radix Sort is stable sort as relative order of elements with equal values is maintained.
Radix sort can be slower than other sorting algorithms like merge sort and quick sort, if the operations are not efficient enough. These operations include inset and delete functions of the sub-list and the process of isolating the digits we want.
Radix sort is less flexible than other sorts as it depends on the digits or letter. Radix sort needs to be rewritten if the type of data is changed.
'''

'''
pseudocode
Radix-Sort(A, d)
//It works same as counting sort for d number of passes.
//Each key in A[1..n] is a d-digit integer.
//(Digits are numbered 1 to d from right to left.)
    for j = 1 to d do
        //A[]-- Initial Array to Sort
        int count[10] = {0};
        //Store the count of "keys" in count[]
        //key- it is number at digit place j
        for i = 0 to n do
         count[key of(A[i]) in pass j]++
        for k = 1 to 10 do
         count[k] = count[k] + count[k-1]
        //Build the resulting array by checking
        //new position of A[i] from count[k]
        for i = n-1 downto 0 do
         result[ count[key of(A[i])] ] = A[j]
         count[key of(A[i])]--
        //Now main array A[] contains sorted numbers
        //according to current digit place
        for i=0 to n do
          A[i] = result[i]
    end for(j)


'''

# Python program for implementation of Radix Sort 

# A function to do counting sort of arr[] according to 
# the digit represented by exp. 
def countingSort(arr, exp1): 

    n = len(arr) 

    # The output array elements that will have sorted arr 
    output = [0] * (n) 

    # initialize count array as 0 
    count = [0] * (10) 

    # Store count of occurrences in count[] 
    for i in range(0, n): 
        index = (arr[i]/exp1) 
        count[ (index)%10 ] += 1

    # Change count[i] so that count[i] now contains actual 
    #  position of this digit in output array 
    for i in range(1,10): 
        count[i] += count[i-1] 

    # Build the output array 
    i = n-1
    while i>=0: 
        index = (arr[i]/exp1) 
        output[ count[ (index)%10 ] - 1] = arr[i] 
        count[ (index)%10 ] -= 1
        i -= 1

    # Copying the output array to arr[], 
    # so that arr now contains sorted numbers 
    i = 0
    for i in range(0,len(arr)): 
        arr[i] = output[i] 

# Method to do Radix Sort 
def radixSort(arr): 

    # Find the maximum number to know number of digits 
    max1 = max(arr) 

    # Do counting sort for every digit. Note that instead 
    # of passing digit number, exp is passed. exp is 10^i 
    # where i is current digit number 
    exp = 1
    while max1/exp > 0: 
        countingSort(arr,exp) 
        exp *= 10

# Driver code to test above 
arr = [ 170, 45, 75, 90, 802, 24, 2, 66] 
radixSort(arr) 

for i in range(len(arr)): 
    print(arr[i]), 

# This code is contributed by Mohit Kumra 