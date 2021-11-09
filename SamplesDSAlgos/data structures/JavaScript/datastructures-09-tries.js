// https://www.tutorialspoint.com/implement-trie-prefix-tree-in-python

// TRIE
    // tree optimized for searching by prefix
    // auto-complete really useful for this
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

class Trie1 {
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
        let currentChild = this.child;
        // loop through each letter in prefix
        for (let x = 0; x < prefix.length; x++) {
            // if current letter doesn't match current child
            if (!(prefix[x] in currentChild)) return false
            // set current child as current letter's dictionary 
                // entry in current child
            currentChild = currentChild[prefix[x]]
        }
        // found
        return true
    }
}
class Trie2 {
    constructor() {
        this.child = {}
    }
    selectProcess = (word, command) => {
        if (command !== 'insert' && command !== 'search' && command !== 'startsWith') {
            console.error("Please select a proper command:  insert, search, or startsWith");
        }
        let currentChild = this.child;
        let letter;
        for (let x = 0; x < word.length; x++) {
            if (!(letter in currentChild)) {
                if (command === 'insert') currentChild[letter] = {};
                else return false;
            }
            currentChild = currentChild[letter];
        }
        if (command === 'insert') currentChild['//'] = 1
        else if (command === 'search') return '//' in currentChild
        else if (command === 'startsWith') return true;
    }
}
class Trie {
    constructor() {
        this.child = {};
    }
    selectProcess = (word, command) => {
        if (command !== 'insert' && command !== 'search' && command !== 'startsWith') {
            console.error(`Please select a proper command:  insert, search, or startsWith.`);
            return new Error(`Invalid command`);
        }
        let currentChild = this.child, letter;
        for (let x = 0; x < word.length; x++)  {
            if (!(letter in currentChild)) {
                if (command === 'insert') currentChild[letter] = {};
                else return false;
            }
            currentChild = currentChild[letter];
        }
        if (command === 'insert') currentChild['//'] = 1
        else if (command === 'search') return '//' in currentChild
        else if (command === 'startsWith') return true;
    }
}

/*
class Trie {
    constructor() {}
    selectProcess = () => {}
}
*/

ob1 = new Trie();
ob1.selectProcess("apple", 'insert');
ob1.selectProcess("banana", 'insert');
console.log(`searching for apple = ${ob1.selectProcess("apple", 'search')}`);
console.log(`searching for app = ${ob1.selectProcess("app", 'search')}`);
console.log(`starts with app = ${ob1.selectProcess("app", 'startsWith')}`);
ob1.selectProcess("app", 'insert');
ob1.selectProcess("apple", 'remove');
console.log(`searching for banana = ${ob1.selectProcess("banana", 'search')}`);
console.log(`searching for ban = ${ob1.selectProcess("ban", 'search')}`);
console.log(`searching for ana = ${ob1.selectProcess("ana", 'search')}`);
ob1.selectProcess("ana", 'insert');
console.log(`starts with ana = ${ob1.selectProcess("ana", 'startsWith')}`);
console.log(`starts with ban = ${ob1.selectProcess("ban", 'startsWith')}`);

/*
ob1 = new Trie();
ob1.insert("apple");
ob1.insert("banana");
console.log(`searching for apple = ${ob1.search("apple")}`);
console.log(`searching for app = ${ob1.search("app")}`);
console.log(`starts with app = ${ob1.startsWith("app")}`);
ob1.insert("app");
console.log(`searching for banana = ${ob1.search("banana")}`);
console.log(`searching for ban = ${ob1.search("ban")}`);
console.log(`searching for ana = ${ob1.search("ana")}`);
ob1.insert("ana");
console.log(`starts with ana = ${ob1.startsWith("ana")}`);
console.log(`starts with ban = ${ob1.startsWith("ban")}`);
*/