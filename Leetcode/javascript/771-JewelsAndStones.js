/*
You're given strings jewels representing the types of stones that are jewels, 
    and stones representing the stones you have. 

Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3

Example 2:
    Input: jewels = "z", stones = "ZZ"
    Output: 0

Constraints:
    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
*/

let numJewelsInStonesBF = (jewels, stones) => {
    let geology = {
        jewels: jewels.split(""),
        stones: stones.split(""),
        both: 0
    };

    // brute force would be to loop through stones
    // if found in jewels, add +1 to 'both' property

    for (let x = 0; x < geology.stones.length; x++) {
        for (let y = 0; y < geology.jewels.length; y++) {
            if (geology.stones[x] === geology.jewels[y]) {
                geology.both++;
            }
        }
    }
    return geology.both;
};

let numJewelsInStones = (jewels, stones) => {
    let stoneSplit = stones.split("");
    let jewelSplit = jewels.split("");
    let jewelsSet = jewelSplit.filter((value, index, self) => self.indexOf(value) === index);
    let count = 0;
    // best way would be by hash table so work is not duplicated
    // hash table should have a letter: true/false property
    let ht = new HashTable(jewelsSet.length);
    // add jewels to hash table as true 
    jewelsSet.forEach(element => ht.add(element, true));
    console.log(`ht.values = ${ht.values}`);
    console.log(`jewelsSet = ${jewelsSet}`);
    for (let x = 0; x < stoneSplit.length; x++) {
        console.log(`stoneSplit[x]/currentStone = ${stoneSplit[x]}`);
        // then loop through stones set and check hash table first
        let currentStone = stoneSplit[x];
        // if in hash table, add +1 to count
        if (ht.search(currentStone)) count++;
    }
    return count;
};

class HashTable {
    constructor(size) {
        this.size = size,
        this.numberOfValues = 0,
        this.values = {}
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }

    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    search = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) && 
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
}

console.log(numJewelsInStones(jewels = "aA", stones = "aAAbbbb"));
console.log(numJewelsInStones(jewels = "z", stones = "ZZ"));
// console.log(numJewelsInStones());