// BLOOM FILTER
    // designed to tell you quickly & efficiently if item is in set
    // trade-off is it can't tell you definitely if item is in set
        // can only tell you definitely not
    // has false-positive rate, but not false-negatives
    // useful for filtering articles NOT to show in recommendations
    // more items = higher false-positive rate, which you can mitigate
        // by having larger array
        // trade-off = larger memory footprint
    
    // m & n = length of two strings
// time complexity:     Avg
    // Access:          ---
    // Search:          O(1) 
    // Insertion:       O(1) 
    // Deletion:        ---   

// space complexity:  almost always less than hash (O(n))

// class for Bloom filter, using murmur3 hash function 

// https://github.com/masahito1997/algorithms/blob/master/src/data-structures/bloom-filter/BloomFilter.js
class BloomFilter {
    // size - the size of the storage.
    constructor(size = 100) {
      // Bloom filter size directly affects the likelihood of false positives.
      // The bigger the size the lower the likelihood of false positives.
      this.size = size;
      this.storage = this.createStore(size);
    }

    insert(item) {
      const hashValues = this.getHashValues(item);
      // Set each hashValue index to true.
      hashValues.forEach((val) => this.storage.setValue(val));
    }

    mayContain(item) {
      const hashValues = this.getHashValues(item);
      for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
        if (!this.storage.getValue(hashValues[hashIndex])) {
          // We know that the item was definitely not inserted.
          return false;
        }
      }
      // The item may or may not have been inserted.
      return true;
    }
  
    /*
     * Creates the data store for our filter.
     * We use this method to generate the store in order to
     * encapsulate the data itself and only provide access
     * to the necessary methods.
     */
    createStore(size) {
      const storage = [];
      // Initialize all indexes to false
      for (let storageCellIndex = 0; storageCellIndex < size; storageCellIndex += 1) {
        storage.push(false);
      }
      const storageInterface = {
        getValue(index) {
          return storage[index];
        },
        setValue(index) {
          storage[index] = true;
        },
      };
      return storageInterface;
    }
  
    hash1(item) {
      let hash = 0;
      for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
        const char = item.charCodeAt(charIndex);
        hash = (hash << 5) + hash + char;
        hash &= hash; // Convert to 32bit integer
        hash = Math.abs(hash);
      }
      return hash % this.size;
    }

    hash2(item) {
      let hash = 5381;
      for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
        const char = item.charCodeAt(charIndex);
        hash = (hash << 5) + hash + char; /* hash * 33 + c */
      }
      return Math.abs(hash % this.size);
    }

    hash3(item) {
      let hash = 0;
      for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
        const char = item.charCodeAt(charIndex);
        hash = (hash << 5) - hash;
        hash += char;
        hash &= hash; // Convert to 32bit integer
      }
      return Math.abs(hash % this.size);
    }
  
    // Runs all 3 hash functions on the input and returns an array of results.
    getHashValues(item) {
      return [
        this.hash1(item),
        this.hash2(item),
        this.hash3(item),
      ];
    }
  }

  
  let bloomFilter;
  const people = [
    'Bruce Wayne',
    'Clark Kent',
    'Barry Allen',
  ];

  bloomFilter = new BloomFilter();
  people.forEach((person) => bloomFilter.insert(person));
  console.log(`bloom filter may contain Barry = ${bloomFilter.mayContain('Barry')}`);
  console.log(`bloom filter may contain Barry Allen = ${bloomFilter.mayContain('Barry Allen')}`);
  console.log(`bloom filter may contain apple = ${bloomFilter.mayContain('apple')}`);
  console.log(`bloom filter may contain Wayne = ${bloomFilter.mayContain('Wayne')}`);
  // console.log(`bloom filter may contain <term> = ${bloomFilter.mayContain('')}`);