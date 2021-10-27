// Find the lengths of the array.
// An array represents a linked list where index 0 represents the head. 
    // Example [1,4,-1,3,2]
        // Result will be 4 where:
            // Head has value of 1
            // 1 has value of 4
            // 4 has value of 2
            // 2 has value of -1 which ends the LL

// time complexity:  O(n) due to one while loop 
// space complexity:  O(1), one unit of space

getArrayLength = (arrayToConvert) => {
    // get length of linked-list array
    let lengthArrayToConvert = arrayToConvert.length
    // get first item in linked-list array
    let firstItem = arrayToConvert[0]
    // if linked-list array or first item is empty or if length is 0, return 0
    if (arrayToConvert == null || lengthArrayToConvert == 0 || firstItem == -1) return 0
    // else, initialize final length to return and index
        // current index is head of linked list
    let finalLength = 0
    let index = 0
    // loop until you hit end of linked list
    while (true) {
        // set current linked-list node
            // start with first item in linked-list array
        let currentItem = arrayToConvert[index]
        // set index to current linked-list node
        index = currentItem
        // add one to final length
        finalLength += 1
        // if index hits end of linked list (less than head), break
        if (index == -1) break
    }
    // return final length
    return finalLength
}

console.log(getArrayLength([1,4,-1,3,2]))
