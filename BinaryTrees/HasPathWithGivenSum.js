/**
 * PROBLEM: Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.
 * 
Definition for binary tree:
    function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}
 */

function hasPathWithGivenSum(t, s) {

    if (!t) {
        return false;
    }
    if ((t.left === null && t.right === null)) {
        return ((s - t.value) === 0)
    };

    var left = t.left ? hasPathWithGivenSum(t.left, (s - t.value)) : false;
    var right = t.right ? hasPathWithGivenSum(t.right, (s - t.value)) : false;

    return left || right;
}
