/**
 * PROBLEM: Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //Short circuit 
    if (x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;

    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x / 10);
    }

    return x === reverse || x === ~~(reverse / 10);
};