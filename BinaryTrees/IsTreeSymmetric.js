/**
 * PROBLEM: Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
 * 
 * Definition for binary tree:
    function Tree(x) {
        this.value = x;
        this.left = null;
        this.right = null;
    }
    */

function isTreeSymmetric(t) {
    return isMirror(t, t);
}

function isMirror(tree1, tree2) {
    if (!tree1 && !tree2) {
        return true;
    }

    if ((tree1 && tree2) && (tree1.value === tree2.value)) {

        return isMirror(tree1.right, tree2.left) && isMirror(tree1.left, tree2.right);
    }

    return false;
}