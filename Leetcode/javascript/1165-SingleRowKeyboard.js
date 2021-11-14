
/*
There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard 
    (indexed from 0 to 25). 

Initially, your finger is at index 0. 
To type a character, you have to move your finger to the index of the desired character. 
The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. 
Write a function to calculate how much time it takes to type it with one finger.

Example 1:
    Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
    Output: 4
    Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
        Total time = 2 + 1 + 1 = 4. 

Example 2:
    Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
    Output: 73

Constraints:
    keyboard.length == 26
    keyboard contains each English lowercase letter exactly once in some order.
    1 <= word.length <= 104
    word[i] is an English lowercase letter.

*/

let calculateTime = (keyboard, word) => {
    let kbMap = {};
    for (let x = 0; x < keyboard.length; x++) {
        // map keyboard to hash table w/ letter as key and index as value
        kbMap[keyboard[x]] = x;
    }
    let previousWord = word[0];
    let timeCount = kbMap[previousWord];
    for (let x = 1; x < word.length; x++) {
        console.log(`previousWord = ${previousWord}  ||  kbMap[previousWord] = ${kbMap[previousWord]}`);
        console.log(`word[x] = ${word[x]} || kbMap[word[x]] = ${kbMap[word[x]]}`);
        // keep current count as you go through word
        // if letter's property present in keyboard map
        if (kbMap.hasOwnProperty(word[x])) {
            let difference = (kbMap[previousWord] - kbMap[word[x]])
            if (difference < 0) difference *= -1;
            timeCount += difference;
        }
        // set previous word to current word for next loop comparison
        previousWord = word[x];
    }
    return timeCount;
};

console.log(calculateTime(keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"));
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", word = "leetcode"));
// console.log(calculateTime());
