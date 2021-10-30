/*
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two 
    adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.

Example 1:
    Input: s = "abbaca"
    Output: "ca"
    Explanation: 
    For example, in "abbaca" we could remove "bb" 
        since the letters are adjacent and equal, 
        and this is the only possible move.  
    The result of this move is that the string is "aaca", 
        of which only "aa" is possible, so the final string is "ca".

    Example 2:
    Input: s = "azxxzy"
    Output: "ay"

Constraints:
    1 <= s.length <= 105
    s consists of lowercase English letters.
*/
var removeDuplicates1 = (stringToCheck) => {
    const storage = [];
    for (let letter of stringToCheck) {
        let topLetter = storage[storage.length - 1];
        if (letter === topLetter) {
            storage.pop();
            continue;
        }
        storage.push(letter);
    }
    return storage.join('');
};

var removeDuplicates = (stringToCheck) => {
    let stringLength = Number(stringToCheck.length);
    if (stringLength == 1 || stringLength == 2 && stringToCheck[0] != stringToCheck[1]) return stringToCheck;
    stringToCheck = stringLoop(stringToCheck);
    stringToCheck = stringLoop(stringToCheck);
    return stringToCheck;
}

let stringLoop = (stringToCheck) => {
    let hashSet = {
        aa: "aa",
        bb: "bb",
        cc: "cc",
        dd: "dd",
        ee: "ee",
        ff: "ff",
        gg: "gg",
        hh: "hh",
        ii: "ii",
        jj: "jj",
        kk: "kk",
        ll: "ll",
        mm: "mm",
        nn: "nn",
        oo: "oo",
        pp: "pp",
        qq: "qq",
        rr: "rr",
        ss: "ss",
        tt: "tt",
        uu: "uu",
        vv: "vv",
        ww: "ww",
        xx: "xx",
        yy: "yy",
        zz: "zz",
    }
    for (let x = 0; x < stringToCheck.length - 1; x++) {
        if (stringToCheck[x] + stringToCheck[x+1] in hashSet) {
            stringToCheck = stringToCheck.substring(0, x) + stringToCheck.substring(x+2, stringToCheck.length)
        }
    }
    return stringToCheck
}
console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("a"));
console.log(removeDuplicates(""));
