/**
 * PROBLEM : Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 
 * TOOO: Solution is slow and too many nondescript letters
 *  Can do Manacher's algorithm https://www.quora.com/What-is-the-Manacher-algorithm-in-laymans-terms-with-examples
 *
 * @param {string} s
 * @return {string} longest palidromatic substring
 */

var longestPalindrome = function (s) {
    if (!s || s.length === 1) return s;

    //length is used multiple times
    //might as well give it a dedicated var
    const n = s.length;

    let table = [[]];
    let maxLength = 1; //length of longest palindrome
    //All strings of length 1
    let i = 0;
    for (i; i < n; i++) {
        table[i] = [];
        table[i][i] = true;
    }

    i = 0; //just going to reuse loop counter
    let start = 0;
    //Check for 2 character substrings
    for (i; i < (n - 1); ++i) {
        //console.log(`${s.charAt(i)} ${s.charAt(i + 1)}`);
        if (s.charAt(i) === s.charAt(i + 1)) {
            table[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    //Now check for occurances greater than 2 characters
    let k = 3;
    let j; //just top level declaration

    for (k; k <= n; ++k) {
        i = 0;
        //Fix the starting index???? need to figure that out
        for (i; i < n - k + 1; ++i) {

            //Get the ending index of substring from
            // starting index i and length k
            j = i + k - 1;

            //Check for substring from ith index to jth
            //if string.charAt(i+1) to string.charAt(j - 1) is palindrome

            if (table[i + 1][j - 1] //is there a base palindrome to work with? 
                && s.charAt(i) === s.charAt(j)) { //do next two chars extend the palindrome?

                table[i][j] = true; //this sequence is also a palindrome

                if (k > maxLength) {
                    //This is the new longest palindrome
                    //start from this length 
                    start = i;
                    maxLength = k;
                }
            }

        }
    }
    //return result;
    return s.slice(start, (maxLength + start));
    //console.log(JSON.stringify(table));
};

const p1 = "cggte"
const p2 = "aaaa";
const p3 = "abasoifsoinvsmbbbbbbbbbcmsthwe"
console.log(`Palindrome Found: ${longestPalindrome(p2)}`);