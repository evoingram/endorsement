/*
Given a rows x cols screen and a sentence represented as a list of strings, 
    return the number of times the given sentence can be fitted on the screen.

The order of words in the sentence must remain unchanged, and 
    a word cannot be split into two lines. 
    A single space must separate two consecutive words in a line.

Example 1:
    Input: sentence = ["hello","world"], rows = 2, cols = 8
    Output: 1
    Explanation:
        hello---
        world---
        The character '-' signifies an empty space on the screen.

Example 2:
    Input: sentence = ["a", "bcd", "e"], rows = 3, cols = 6
    Output: 2
    Explanation:
        a-bcd- 
        e-a---
        bcd-e-
        The character '-' signifies an empty space on the screen.

Example 3:
    Input: sentence = ["i","had","apple","pie"], rows = 4, cols = 5
    Output: 1
    Explanation:
        i-had
        apple
        pie-i
        had--
        The character '-' signifies an empty space on the screen.

Constraints:
    1 <= sentence.length <= 100
    1 <= sentence[i].length <= 10
    sentence[i] consists of lowercase English letters.
    1 <= rows, cols <= 2 * 104
*/

let wordsTyping = (sentence, rows, cols) => {
    let wordLength, sentenceCount = 0, rowCount = 0, wordIndex = 0, remainingColumnsPerRow = cols;
    // repeat until row count = rows
    while(rowCount < rows){
        const word = sentence[wordIndex];
        wordLength = word.length;
        if (wordLength > cols) return 0;
        if (wordLength <= remainingColumnsPerRow) {
            // if number of columns >= word length, add word & - to current row
            remainingColumnsPerRow = remainingColumnsPerRow - wordLength - 1;
            wordIndex++;
            if (wordIndex === sentence.length) {
                // if you make it through array and still are <= number of rows, count + 1
                sentenceCount++;
                wordIndex = 0;
            }
        } else {
            // if can't fit next word on that line, add 1 to row & reset number of columns
            remainingColumnsPerRow = cols;   
            rowCount++;
        }    
    }
    return sentenceCount;
};

console.log(`${wordsTyping(["hello","world"], rows = 2, cols = 8)}`);
console.log(`${wordsTyping(["a", "bcd", "e"], rows = 3, cols = 6)}`);
console.log(`${wordsTyping(["i","had","apple","pie"], rows = 4, cols = 5)}`);
// console.log(`${wordsTyping()}`);
