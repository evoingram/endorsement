
// MERGE SORT (RECURSIVE):
    // divide in half until you have sub-arrays of single elements
    // then merge sorted lists together
    // very useful, easier to understand than others, recursive
    // effective and stable
    // use if you have equivalent elements; it will keep their 
        // original order in array

    // take big list & divide into two half-lists
    // recursively call merge sort on smaller list, which will 
        // in turn do the same
    // base case = list of one
    // on way up recursive calls, you will merge sorted lists together
        // using function walking through both simultaneously & inserts
        // smaller value first, creating bigger sorted list
    

// time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
// space complexity:  O(n) because we create new lists as we go

// complete the helper function below to merge 2 sorted arrays 

merge1 = (originalArrayA, originalArrayB) => {
    /*
    procedure merge( var originalArrayA as array, var originalArrayB as array )
        var mergedArray as array
        while ( originalArrayA and originalArrayB have elements )
            if ( originalArrayA[0] > originalArrayB[0] )
                add originalArrayB[0] to the end of mergedArray
                remove originalArrayB[0] from originalArrayB
            else
                add originalArrayA[0] to the end of mergedArray
                remove originalArrayA[0] from originalArrayA
        end while
        while ( originalArrayA has elements )
                add originalArrayA[0] to the end of mergedArray
                remove originalArrayA[0] from originalArrayA
        end while  
        while ( originalArrayB has elements )
                add originalArrayB[0] to the end of mergedArray
                remove originalArrayB[0] from originalArrayB
        end while   
        return mergedArray
        end procedure
    */

    let mergedArray = [];

    while(originalArrayA.length && originalArrayB.length){
        if(originalArrayA[0] <= originalArrayB[0]) mergedArray.push(originalArrayA.shift())
        else mergedArray.push(originalArrayB.shift());
    }

    while(originalArrayA.length) mergedArray.push(originalArrayA.shift());
  
    while(originalArrayB.length) mergedArray.push(originalArrayB.shift());

    return mergedArray
}

// implement the Merge Sort function below USING RECURSION
mergeSort1 = (originalArray) => {
    /*
    procedure mergesort( var a as array )
        if ( n == 1 ) return a
        l1 as array = a[0] ... a[n/2]
        l2 as array = a[n/2+1] ... a[n]
        l1 = mergesort( l1 )
        l2 = mergesort( l2 )
        return merge( l1, l2 )
    end procedure
    */

    const {length:arraySize} = originalArray;
    if (arraySize < 2) return originalArray;
    const midPoint = Math.floor(arraySize/2);
    const leftArray = originalArray.slice(0, midPoint);
    const sortedLeftArray = mergeSort(leftArray);
    const rightArray = originalArray.slice(midPoint, arraySize);
    const sortedRightArray = mergeSort(rightArray);
    return merge(sortedLeftArray, sortedRightArray);
  }

// implement an in-place merge sort algorithm
mergeInPlace1 = (
    originalArray, 
    startPoint=0, 
    midPoint=Math.floor(originalArray.length/2), 
    endPoint=originalArray.length-1
) => {
    /*
    procedure merge( var originalArrayA as array, var originalArrayB as array )
        var mergedArray as array
        while ( originalArrayA and originalArrayB have elements )
            if ( originalArrayA[0] > originalArrayB[0] )
                add originalArrayB[0] to the end of mergedArray
                remove originalArrayB[0] from originalArrayB
            else
                add originalArrayA[0] to the end of mergedArray
                remove originalArrayA[0] from originalArrayA
        end while   

        while ( originalArrayA has elements )
                add originalArrayA[0] to the end of mergedArray
                remove originalArrayA[0] from originalArrayA
        end while  

        while ( originalArrayB has elements )
                add originalArrayB[0] to the end of mergedArray
                remove originalArrayB[0] from originalArrayB
        end while   

        return mergedArray
    end procedure
    */
    let midPlus1 = midPoint + 1;

    if (originalArray[midPlus1] >= originalArray[midPoint]) return 

    while (startPoint <= midPoint && endPoint >= midPlus1) {

        if (originalArray[startPoint] <= originalArray[midPlus1]) startPoint += 1
        else {
            currentUpperMidValue = originalArray[midPlus1]
            currentUpperMidIndex = midPlus1

            while (startPoint != currentUpperMidIndex) {
                originalArray[currentUpperMidIndex] = originalArray[currentUpperMidIndex - 1]
                currentUpperMidIndex -= 1
            }
            
            originalArray[startPoint] = currentUpperMidValue

            startPoint += 1
            midPoint += 1
            midPlus1 += 1
        }
    }
    return originalArray
}

mergeSortInPlace1 = (originalArray, leftPoint, rightPoint) => {
    /*
    procedure mergesort( var a as array )
        if ( n == 1 ) return a
        l1 as array = a[0] ... a[n/2]
        l2 as array = a[n/2+1] ... a[n]
        l1 = mergesort( l1 )
        l2 = mergesort( l2 )
        return merge( l1, l2 )
    end procedure
    */
    if (rightPoint > leftPoint) {

        let midPoint = leftPoint + Math.floor((rightPoint - leftPoint) / 2)

        mergeSortInPlace(originalArray, leftPoint, midPoint)
        mergeSortInPlace(originalArray, midPoint + 1, rightPoint)

        mergeInPlace(originalArray, leftPoint, midPoint, rightPoint)
    }
    return originalArray
}

// this function & next from https://www.geeksforgeeks.org/in-place-merge-sort/
function mergeSIP1(arr, start, mid, end)
{
    let start2 = mid + 1;
 
    // If the direct merge is already sorted
    if (arr[mid] <= arr[start2])
    {
        return;
    }
 
    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end)
    {
         
        // If element 1 is in right place
        if (arr[start] <= arr[start2])
        {
            start++;
        }
        else
        {
            let value = arr[start2];
            let index = start2;
 
            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start)
            {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
 
            // Update all the pointers
            start++;
            mid++;
            start2++;
        }
    }
}
 
/* l is for left index and r is right index
of the sub-array of arr to be sorted */
function sortInPlace1(arr, l, r)
{
    if (l < r)
    {
         
        // Same as (l + r) / 2, but avoids overflow
        // for large l and r
        let m = l + Math.floor((r - l) / 2);
 
        // Sort first and second halves
        sortInPlace(arr, l, m);
        sortInPlace(arr, m + 1, r);
 
        mergeSIP(arr, l, m, r);
    }
}


merge1 = (originalArrayA, originalArrayB) => {
    let mergedArray = [];
    while (originalArrayA.length && originalArrayB.length) {
        if (originalArrayA[0] <= originalArrayB[0]) mergedArray.push(originalArrayA.shift())
        else mergedArray.push(originalArrayB.shift());
    }
    while (originalArrayA.length) mergedArray.push(originalArrayA.shift());
    while (originalArrayB.length) mergedArray.push(originalArrayB.shift());
    return mergedArray
}
mergeSort1 = (originalArray) => {
    const { length: arraySize } = originalArray;
    if (arraySize < 2) return originalArray;
    const midPoint = Math.floor(arraySize / 2);
    const leftArray = originalArray.slice(0, midPoint);
    const sortedLeftArray = mergeSort(leftArray);
    const rightArray = originalArray.slice(midPoint, arraySize);
    const sortedRightArray = mergeSort(rightArray);
    return merge(sortedLeftArray, sortedRightArray);
}
mergeInPlace1 = (
    originalArray,
    startPoint = 0,
    midPoint = Math.floor(originalArray.length / 2),
    endPoint = originalArray.length - 1
) => {
    let midPlus1 = midPoint + 1;
    if (originalArray[midPlus1] >= originalArray[midPoint]) return;
    while (startPoint <= midPoint && endPoint >= midPlus1) {
        if (originalArray[startPoint] <= originalArray[midPlus1]) startPoint += 1;
        else {
            currentUpperMidValue = originalArray[midPlus1];
            currentUpperMidIndex = midPlus1;
            while (startPoint != currentUpperMidIndex) {
                originalArray[currentUpperMidIndex] = originalArray[currentUpperMidIndex - 1];
                currentUpperMidIndex -= 1;
            }
            originalArray[startPoint] = currentUpperMidValue;
            startPoint += 1;
            midPoint += 1;
            midPlus1 += 1;
        }
    }
    return originalArray;
}
mergeSortInPlace1 = (originalArray, leftPoint, rightPoint) => {
    if (rightPoint > leftPoint) {
        let midPoint = leftPoint + Math.floor((rightPoint - leftPoint) / 2);
        mergeSortInPlace(originalArray, leftPoint, midPoint);
        mergeSortInPlace(originalArray, midPoint + 1, rightPoint);
        mergeInPlace(originalArray, leftPoint, midPoint, rightPoint);
    }
    return originalArray;
}
mergeSIP1 = (arr, start, mid, end) => {
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2]) return;

    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) start++;
        else {
            let value = arr[start2];
            let index = start2;
            while (index != start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
            start++;
            mid++;
            start2++;
        }
    }
}
sortInPlace1 = (arr, l, r) => {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        sortInPlace(arr, l, m);
        sortInPlace(arr, m + 1, r);
        mergeSIP(arr, l, m, r);
    }
}

merge = (oaa, oab) => {
    let ma = [];
    while (oaa.length && oab.length) {
        if (oaa[0] <= oab[0]) ma.push(oaa.shift())
        else ma.push(oab.shift());
    }
    while (oaa.length) ma.push(oaa.shift());
    while (oab.length) ma.push(oab.shift());
    return ma;
}
mergeSort = (oa) => {
    let asize = oa.length;
    if (asize < 2) return oa;
    const mid = Math.floor(asize / 2);
    const la = oa.slice(0, mid);
    const sla = mergeSort(la);
    const ra = oa.slice(mid, asize);
    const sra = mergeSort(ra);
    return merge(sla, sra);

}
mergeInPlace = (
    oa,
    start = 0,
    mid = Math.floor(oa.length / 2),
    end = oa.length - 1
) => {
    let midp1 = mid + 1;
    if (oa[midp1 >= oa[mid]]) return;
    while (start <= mid && end >= midp1) {
        if (oa[start] <= oa[midp1]) start++
        else {
            cumv = oa[midp1];
            cumi = midp1;
            while (start != cumi) {
                oa[cumi] = oa[cumi - 1];
                cumi--;
            }
            oa[start] = cumv;
            start++;
            mid++;
            midp1++;
        }
    };
    return oa;
}
mergeSortInPlace = (oa, lp, rp) => {
    if (rp > lp) {
        let mid = lp + Math.floor((rp - lp) / 2);
        mergeSortInPlace(oa, lp, mid);
        mergeSortInPlace(oa, mid + 1, rp);
        mergeInPlace(oa, lp, mid, rp);
    }
    return oa;
}

/*
- recursive
merge = (originalArrayA, originalArrayB) => {}
mergeSort = (originalArray) => {}
- iterative
mergeInPlace = (
    originalArray,
    startPoint = 0,
    midPoint = Math.floor(originalArray.length / 2),
    endPoint = originalArray.length - 1
) => {}
mergeSortInPlace = (originalArray, leftPoint, rightPoint) => {}
*/

array = [4, 22, 41, 40, 27, 30, 36, 16, 42, 37, 14, 39, 3, 6, 34, 9, 21, 2, 29, 47]
console.log('--------------------mergeSort (recursion)-------------------------');
console.log(`original array:  ${array}`)
var sortedArray = mergeSort(array)
console.log(`sorted array:  ${sortedArray}`)
console.log('---------------------mergeSortInPlace (in place)------------------------');
array = [4, 22, 41, 40, 27, 30, 36, 16, 42, 37, 14, 39, 3, 6, 34, 9, 21, 2, 29, 47]
console.log(`original array:  ${array}`)
mergeSortInPlace(array, 0, array.length - 1);
console.log(`sorted array:  ${sortedArray}`)
console.log('---------------------------------------------');