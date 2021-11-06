// https://www.tutorialspoint.com/implement-trie-prefix-tree-in-python

// TRIE
    // tree optimized for searching by prefix
    // auto-complete really useful ffor this
    // starts wth root node that doesn't represent anything
    // has bunch of child nodes representing 1 letter
        // each of those has child nodes representing next letter
    // can add weights to certain edges/children so they are suggested first
    // space is its own node
    
// time complexity:     Avg        |   Worst
    // Access:       O(n)          |   O(n)
    // Search:       O(key_length) |   O(n)
    // Insertion:    O(key_length) |   O(n)
    // Deletion:     O(key_length) |   O(n)

// space complexity:  O(ALPHABET_SIZE * key_length * N)

class Trie {
    constructor() {
        this.child = {}
    }

    insert = (word) => {
        // get current child
        let currentChild = this.child
        // loop through each letter in word
        for (let x = 0; x < word.length; x++) {
            // if current letter doesn't match current child
            if (!(word[x] in currentChild)) {
                // set current letter's dictionary entry in 
                    // current child as empty dictionary
                currentChild[word[x]] = {}
            }
            // set current child as current letter's dictionary 
                // entry in current child
            currentChild = currentChild[word[x]]
        }
        // 
        currentChild['//'] = 1
        
    }

    search = (word) => {
        // get current child
        let currentChild = this.child
        // loop through each letter in word
        for (let x = 0; x < word.length; x++) {
            // if current letter doesn't match current child
            if (!(word[x] in currentChild)) return false
            // set current child as current letter's dictionary 
                // entry in current child
            currentChild = currentChild[word[x]]
        }
        return '//' in currentChild

    }

    startsWith = (prefix) => {
        // get current child
        let currentChild = this.child
        // loop through each letter in prefix
        for (let x = 0; x < prefix.length; x++) {
            // if current letter doesn't match current child
            if (!(prefix[x] in currentChild)) {
                // not found
                return false
            }
            // set current child as current letter's dictionary 
                // entry in current child
            currentChild = currentChild[prefix[x]]
        }
        // found
        return true
    }
}

ob1 = new Trie()
ob1.insert("apple")
console.log(ob1.search("apple"))
console.log(ob1.search("app"))
console.log(ob1.startsWith("app"))
ob1.insert("app")
console.log(ob1.search("app"))