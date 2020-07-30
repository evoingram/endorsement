'''
Can we search in a sorted linked list in better than O(n) time?
    The worst case search time for a sorted linked list is O(n) as we 
        can only linearly traverse the list and cannot skip nodes 
        while searching. 
    For a Balanced Binary Search Tree, we skip almost half of the nodes 
        after one comparison with root. 
    For a sorted array, we have random access and we can apply binary 
    search on arrays.

Can we augment sorted linked lists to make the search faster? 
    The answer is Skip List. 
    The idea is simple, we create multiple layers so that we can 
        skip some nodes. 
    See the following example list with 16 nodes and two layers. 
    The upper layer works as an “express lane” which connects only 
        main outer stations.
    The lower layer works as a “normal lane” which connects every station. 
    Suppose we want to search for 50, we start from first node of “express 
        lane” and keep moving on “express lane” till we find a node whose 
        next is greater than 50.
    Once we find such a node (30 is the node in following example) on 
        “express lane”, we move to “normal lane” using pointer from this 
        node, and linearly search for 50 on “normal lane”. 
    In following example, we start from 30 on “normal lane” and with linear 
        search, we find 50.

What is the time complexity with two layers? 
    The worst case time complexity is number of nodes on “express lane” 
        plus number of nodes in a segment (A segment is number of “normal 
        lane” nodes between two “express lane” nodes) of “normal lane”. 
    So if we have n nodes on “normal lane”, √n (square root of n) nodes on 
        “express lane” and we equally divide the “normal lane”, then there 
        will be √n nodes in every segment of “normal lane” . 
    √n is actually optimal division with two layers. With this arrangement, 
        the number of nodes traversed for a search will be O(√n). 
    Therefore, with O(√n) extra space, we are able to reduce the time 
        complexity to O(√n).


Can we do better?
    The time complexity of skip lists can be reduced further by adding more layers. 
    In fact, the time complexity of search, insert and delete can become O(Logn) in 
        average case with O(n) extra space. 

Deciding nodes level

    Each element in the list is represented by a node, the level of the node is chosen 
        randomly while insertion in the list. 
        Level does not depend on the number of elements in the node. 
        The level for node is decided by the following algorithm –

            randomLevel()
            lvl := 1
            //random() that returns a random value in [0...1)
            while random() < p and lvl < MaxLevel do
            lvl := lvl + 1
            return lvl

        MaxLevel is the upper bound on number of levels in the skip list. 
        It can be determined as – L(N) = log_{p/2}{N}. 
        Above algorithm assure that random level will never be greater than MaxLevel. 
        Here p is the fraction of the nodes with level i pointers also having level i+1 pointers 
            and N is the number of nodes in the list.

Node Structure

Each node carries a key and a forward array carrying pointers to nodes of a different level. A level i node carries i forward pointers indexed through 0 to i.
Skip Node

Insertion in Skip List

We will start from highest level in the list and compare key of next node of the current node with the key to be inserted. Basic idea is If –

Key of next node is less than key to be inserted then we keep on moving forward on the same level
Key of next node is greater than the key to be inserted then we store the pointer to current node i at update[i] and move one level down and continue our search.
At the level 0, we will definitely find a position to insert given key.
'''

'''
Following is the pseudo code for the insertion algorithm –

Insert(list, searchKey)
local update[0...MaxLevel+1]
x := list -> header
for i := list -> level downto 0 do
    while x -> forward[i] -> key  forward[i]
update[i] := x
x := x -> forward[0]
lvl := randomLevel()
if lvl > list -> level then
for i := list -> level + 1 to lvl do
    update[i] := list -> header
    list -> level := lvl
x := makeNode(lvl, searchKey, value)
for i := 0 to level do
    x -> forward[i] := update[i] -> forward[i]
    update[i] -> forward[i] := x
Here update[i] holds the pointer to node at level i from which we moved down to level i-1 and pointer of node left to insertion position at level 0. Consider this example where we want to insert key 17 –
Insert node
Following is the code for insertion of key in Skip list –
'''

# Python3 code for inserting element in skip list

"""

"""
# SKIP LIST

# time complexity:     Avg      |   Worst
    # Access:       O(log(n))   |   O(n)
    # Search:       O(log(n))   |   O(n)
    # Insertion:    O(log(n))   |   O(n)
    # Deletion:     O(log(n))   |   O(n)

# space complexity:  O(n log(n))




import random
class Node(object):
    '''
    Class to implement node
    '''

    def __init__(self, key, level):
        self.key = key

        # list to hold references to node of different level
        self.forward = [None]*(level+1)


class SkipList(object):
    '''
    Class for Skip list
    '''

    def __init__(self, max_lvl, P):
        # Maximum level for this skip list
        self.MAXLVL = max_lvl

        # P is the fraction of the nodes with level
        # i references also having level i+1 references
        self.P = P

        # create header node and initialize key to -1
        self.header = self.createNode(self.MAXLVL, -1)

        # current level of skip list
        self.level = 0

    # create  new node
    def createNode(self, lvl, key):
        n = Node(key, lvl)
        return n

    # create random level for node
    def randomLevel(self):
        lvl = 0
        while random.random() < self.P and \
                lvl < self.MAXLVL:
                  lvl += 1
        return lvl

    # insert given key in skip list
    def insertElement(self, key):
        # create update array and initialize it
        update = [None]*(self.MAXLVL+1)
        current = self.header

        '''
        start from highest level of skip list
        move the current reference forward while key
        is greater than key of node next to current
        Otherwise inserted current in update and
        move one level down and continue search
        '''
        for i in range(self.level, -1, -1):
            while current.forward[i] and \
                    current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current

        '''  
        reached level 0 and forward reference to  
        right, which is desired position to  
        insert key. 
        '''
        current = current.forward[0]

        ''' 
        if current is NULL that means we have reached 
           to end of the level or current's key is not equal 
           to key to insert that means we have to insert 
           node between update[0] and current node 
       '''
        if current == None or current.key != key:
            # Generate a random level for node
            rlevel = self.randomLevel()

            ''' 
            If random level is greater than list's current 
            level (node with highest level inserted in  
            list so far), initialize update value with reference 
            to header for further use 
            '''
            if rlevel > self.level:
                for i in range(self.level+1, rlevel+1):
                    update[i] = self.header
                self.level = rlevel

            # create new node with random level generated
            n = self.createNode(rlevel, key)

            # insert node by rearranging references
            for i in range(rlevel+1):
                n.forward[i] = update[i].forward[i]
                update[i].forward[i] = n

            print("Successfully inserted key {}".format(key))

    # Display skip list level wise
    def displayList(self):
        print("\n*****Skip List******")
        head = self.header
        for lvl in range(self.level+1):
            print("Level {}: ".format(lvl), end=" ")
            node = head.forward[lvl]
            while(node != None):
                print(node.key, end=" ")
                node = node.forward[lvl]
            print("")

# Driver to test above code


def main():
    lst = SkipList(3, 0.5)
    lst.insertElement(3)
    lst.insertElement(6)
    lst.insertElement(7)
    lst.insertElement(9)
    lst.insertElement(12)
    lst.insertElement(19)
    lst.insertElement(17)
    lst.insertElement(26)
    lst.insertElement(21)
    lst.insertElement(25)
    lst.displayList()


main()
