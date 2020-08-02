# https://www.tutorialspoint.com/implement-trie-prefix-tree-in-python
'''
pseudocode:
Suppose we have to make the trie structure, with three basic operations like insert(), search(), startsWith() methods. We can assume that all inputs are in lowercase letters. For example, if we call the functions as follows, we will see the outputs

    Trie trie = new Trie()
    trie.insert(“apple”)
    trie.search(“apple”)     //This will return true
    trie.search(“app”)        //This will return false
    trie.startsWith(“app”)   //This will return true
    trie.insert(“app”)
    trie.search(“app”)        //This will return true
To solve this, we will follow these steps −

    Initially make one dictionary called child.
    The insert method will be like −
    current := child
    for each letter l in word −
        if l is not present in current, then current[l] := new dictionary
    current := current[l]
    current[#] = 1
    The search method will be like −
    current := child
    for each letter l in word −
        if l is not present in current, then return false
        current := current[l]
    return true if current[#] = 1, otherwise false
    The startsWith method will be like −
    current := child
    for each letter l in word −
        if l is not present in current, then return false
        current := current[l]
    return True

'''


class Trie(object):
    def __init__(self):
        self.child = {}

    def insert(self, word):
        current = self.child
        for l in word:
            if l not in current:
                current[l] = {}
            current = current[l]
        current['#'] = 1

    def search(self, word):
        current = self.child
        for l in word:
            if l not in current:
                return False
            current = current[l]
        return '#' in current

    def startsWith(self, prefix):
        current = self.child
        for l in prefix:
            if l not in current:
                return False
            current = current[l]
        return True

ob1 = Trie()
ob1.insert("apple")
print(ob1.search("apple"))
print(ob1.search("app"))
print(ob1.startsWith("app"))
ob1.insert("app")
print(ob1.search("app"))
