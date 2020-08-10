# find the largest BST subtree in a given binary tree
# https://www.geeksforgeeks.org/find-the-largest-subtree-in-a-tree-that-is-also-a-bst/

# Given a Binary Tree, write a function that returns the size of the largest subtree which 
    # is also a Binary Search Tree (BST). 

# If the complete Binary Tree is BST, then return the size of whole tree.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def largest_BST(self):
        pass
        # left is < parent
        # right is > parent

        # 