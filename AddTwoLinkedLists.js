/**
 * PROBLEM:
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return add(l1, l2, 0);
};


function add(l1, l2, carryOver) {
    var val = l1.val + l2.val + carryOver;
    var nextCarryOver = 0;
    if(val > 9) {
        nextCarryOver++;
        val = val % 10;
    }

    var linkNode = new ListNode(val);
    
    if(nextCarryOver > 0 || l1.next || l2.next){
        linkNode.next = 
            add(l1.next ? l1.next : new ListNode(0) ,l2.next ? l2.next : new ListNode(0) , nextCarryOver);
    }
    
    return linkNode;
    
};
