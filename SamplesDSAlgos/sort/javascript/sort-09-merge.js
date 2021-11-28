
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

merge1 = (oaa, oab) => {
    let ma = [];
    while (oaa.length && oab.length) {
        if (oaa[0] <= oab[0]) ma.push(oaa.shift())
        else ma.push(oab.shift());
    }
    while (oaa.length) ma.push(oaa.shift());
    while (oab.length) ma.push(oab.shift());
    return ma;
}
mergeSort1 = (oa) => {
    let asize = oa.length;
    if (asize < 2) return oa;
    const mid = Math.floor(asize / 2);
    const la = oa.slice(0, mid);
    const sla = mergeSort(la);
    const ra = oa.slice(mid, asize);
    const sra = mergeSort(ra);
    return merge(sla, sra);

}
mergeInPlace1 = (
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
mergeSortInPlace1 = (oa, lp, rp) => {
    if (rp > lp) {
        let mid = lp + Math.floor((rp - lp) / 2);
        mergeSortInPlace(oa, lp, mid);
        mergeSortInPlace(oa, mid + 1, rp);
        mergeInPlace(oa, lp, mid, rp);
    }
    return oa;
}

merge = (oaa, oab) => {
    let ma = [];
    while (oaa.length && oab.length) {
        if (oaa[0] <= oab[0]) ma.push(oaa.shift());
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
merge = (oaa, oab) => {}
mergeSort = (oa) => {}
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