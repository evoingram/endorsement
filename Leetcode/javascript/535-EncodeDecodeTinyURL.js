/*
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as 
    https://leetcode.com/problems/design-tinyurl and it returns 
    a short URL such as http://tinyurl.com/4e9iAk. 

Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and 
    the tiny URL can be decoded to the original URL.

Implement the Solution class:
    Solution() Initializes the object of the system.
    String encode(String longUrl) Returns a tiny URL for the given longUrl.
    String decode(String shortUrl) Returns the original long URL for the given shortUrl. 
    It is guaranteed that the given shortUrl was encoded by the same object.

Example 1:
    Input: url = "https://leetcode.com/problems/design-tinyurl"
    Output:      "https://leetcode.com/problems/design-tinyurl"
                 "http://tinyurl.com/4e9iAk"
Explanation:
    Solution obj = new Solution();
    string tiny = obj.encode(url); // returns the encoded tiny url.
    string ans = obj.decode(tiny); // returns the original url after deconding it.


Constraints:0
    1 <= url.length <= 104
    url is guranteed to be a valid URL.
*/

let encode = (longUrl) => {
    // take a random string of six characters
    let encodedPortion = randomString(6);
    let ht = new HashTable(10);
    // save it to hash table w/ url as value
    if (!ht.searchByValue(longUrl)) ht.add(encodedPortion, longUrl);
    // encode = adds it to hash table
    // decode = reads it from hash table
    console.log(ht.searchByValue(longUrl));
    return `http://www.tinyurl.com/${ht.searchByValue(longUrl)}`
};

let decode = (shortUrl) => {
    let ht = new HashTable(10);
    // split by / and trim everything but last array item 
    let shortURLArray = shortUrl.split("/");
    let encodedPortion = shortURLArray[shortURLArray.length - 1];
    console.log(`${shortURLArray}:${encodedPortion}`);
    // search for last array item in hash table
    // return value
    return ht.searchByKey(encodedPortion);
}; 

let randomString = (desiredLength) => {
    let p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return [...Array(desiredLength)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.numberOfValues = 0;
        this.values = {};
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};
        if (!this.values[hash].hasOwnProperty(key)) this.numberOfValues++;
        this.values[hash][key] = value;
    };
    searchByKey = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) && 
            this.values[hash].hasOwnProperty(key)
        ) {
            console.log(`hash = ${hash}  |  key = ${key}  |  ${this.values[hash][key]}`);
            return this.values[hash][key];
        }
        return null;
    };
    searchByValue = (value) => {
        for (const hash in this.values) {
            for(const key in this.values[hash]) {
                if (this.values[hash][key] === value) {
                    return key;
                }
            }
        }
        return null;
    }
}

console.log(encode(longUrl = 'https://leetcode.com/problems/design-tinyurl'));
console.log(`--------------------`)
let shortURL = encode(longUrl = 'https://leetcode.com/problems/design-tinyurl');
console.log(`shortURL = ${shortURL}`);
console.log(decode(shortUrl = shortURL));