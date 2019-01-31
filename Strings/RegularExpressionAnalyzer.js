/**
 * PROBLEM: Write a function that takes two strings as arguments s (a string to match) 
 *          and p (a regular expression pattern) and return a boolean denoting whether s matches p
 * 
 *          '.' - matches exactly one occurance of any character
 *          '*' - matches zero or more occurances of the previous character
 * 
 *          isMatch("aa","a") return false
 *          isMatch("aa","aa") return true
 *          isMatch("aaa","aa") return false
 *          isMatch("aa", "a*") return true
 *          isMatch("aa", ".*") return true
 *          isMatch("ab", ".*") return true
 *          isMatch("aab", "c*a*b") return true
 * 
 * ASSUMPTIONS: 1. All inputs are strings, strings of 0 length allowed
 *              2. '*' will never be the first character in a pattern. 
 *              
 * 
 * SOLUTION: Simplify the solution into two basic cases, 1. The second char is '*' 2. The second char is not '*'
 *           For #1, if the first char of pattern is not ".", the first char of pattern and string should be the same. Then continue to match the remaining part.
 *           For #2, if the first char of pattern is "." or first char of pattern == the first i char of string, continue to match the remaining part.
 *          
 *           Use a recursive approach to break the string down. 
 *              -When pattern and string to match are both empty strings return true
 *              -Focus on the explicit FAIL cases, and pushing the inputs on until base case is reached.
 * 
 * COMPLEXITY: O(n)
 *
 */


function isMatch(str, pattern) {
    if (pattern.length === 0) return str.length === 0;

    //Special case of single character
    if ((pattern.length === 1) || pattern.charAt(1) !== '*') {
        //Because '*' pattern requires at least 2 chars, if there is a 1 char pattern, there has to be string present
        if (str.length < 1) return false;

        //Check simple case of characters not matching, or a '*' with no preceeding char
        if (pattern.charAt(0) !== str.charAt(0) && pattern.charAt(0) !== '.') {
            return false;
        } else {
            //Will hit the top base case, if both strings are '' will return true,
            //if the string has chars while the pattern is empty, will return false
            return isMatch(str.substr(1), pattern.substr(1));
        }
    }

    //CASE #1 When the second char of the pattern is not '*' (same as special case actually);
    // if (pattern.charAt(1) !== '*') {
    //     //Because it's not a star the string needs to have characters
    //     if (str.length < 1) return false;

    //     //Check simple case of characters not matching, or a '*' with no preceeding char
    //     if ((pattern.charAt(0) !== str.charAt(0) && pattern.charAt(0) !== '.')) {
    //         return false;
    //     } else {
    //         return isMatch(str.substr(1), pattern.substr(1));
    //     }
    // }

    //In my head this is the only special case, the second char is '*'
    else {
        //When '*' doesn't explicitly match anything, see if we can skip it and match the rest of the string
        if (isMatch(str, pattern.substr(2))) return true;

        //The '*' matches 1 or more of the preceeding character
        //Loop over each character left in the string
        //While the current character equals the character to match, or the character to match is a '.'
        let i = 0;
        while (i < str.length && (str.charAt(i) === pattern.charAt(0) || pattern.charAt(0) === '.')) {
            //Determine if the rest of the string matches after the '*'
            if (isMatch(str.substr(i + 1), pattern.substr(2))) {
                return true;
            }

            //If the rest of the pattern doesn't match
            //Keep moving the pointer down the string until we get
            //To a point where either this string of characters end
            i++;
        }
        return false;
    }
}


//TEST CASES
console.log('isMatch("aa", "a")', `${isMatch("aa", "a") ? 'FAIL' : 'PASS'}`); //FALSE
console.log('isMatch("aa", "aa")', `${isMatch("aa", "aa") ? 'PASS' : 'FAIL'}`); //TRUE
console.log('isMatch("aaa", "aa")', `${isMatch("aaa", "aa") ? 'FAIL' : 'PASS'}`); //FALSE
console.log('isMatch("aa", "a*")', `${isMatch("aa", "a*") ? 'PASS' : 'FAIL'}`); //TRUE
console.log('isMatch("aa", ".*")', `${isMatch("aa", ".*") ? 'PASS' : 'FAIL'}`); //TRUE
console.log('isMatch("ab", ".*")', `${isMatch("ab", ".*") ? 'PASS' : 'FAIL'}`); //TRUE
console.log('isMatch("aab", "c*a*b")', `${isMatch("aab", "c*a*b") ? 'PASS' : 'FAIL'}`); //TRUE


//EDGE CASE TESTS