/** 
 * PROBLEM: Given two binary trees t1 and t2, determine whether the second tree is a subtree of the first tree. 
 * A subtree for vertex v in a binary tree t is a tree consisting of v and all its descendants in t. 
 * Determine whether or not there is a vertex v (possibly none) in tree t1 such that a subtree for vertex v (possibly empty) in t1 equals t2.
 * 
 *
    Definition for binary tree:
        function Tree(x) {
        this.value = x;
        this.left = null;
        this.right = null;
    }   
 */


function isSubtree(t1, t2) {
    if (!t2) { return true; }
    if (!t1) { return false; }

    if (areIdentical(t1, t2)) {
        return true;
    }

    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
}


function areIdentical(t1, t2) {
    if (!t2) { return !t1; }
    if (!t1) { return false; }


    if (t1.value != t2.value) { return false; }

    return (areIdentical(t1.left, t2.left)
        && areIdentical(t1.right, t2.right));
}