/**
 * PROBLEM: Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this is what you will be asked to accomplish in an interview.

A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order. See examples for better understanding.

        Definition for binary tree:
        function Tree(x) {
        this.value = x;
        this.left = null;
        this.right = null;
        }

* SOLUTION: Navigate the tree starting with the left (lower) values putting them into a stack, once all the left tree values
    are on the stack, pop the stack and decrement k, if k is 0 this is the value, otherwise do this for the right of the tree.
* COMPLEXITY: O(n)
/**
 * 
 * @param {Object} t Head of tree
 * @param {Number} k kth position to find
 */

function kthSmallestInBST(t, k) {
    let stack = [];

    while (stack.length > 0 || t) {
        if (t) {
            stack.push(t);
            t = t.left;
        } else {
            // past end of tree go up one
            let treeNode = stack.pop();
            k--;
            if (k === 0) {
                //found the value 
                return treeNode.value;
            }

            //else go down the right
            t = treeNode.right;
        }
    }
}