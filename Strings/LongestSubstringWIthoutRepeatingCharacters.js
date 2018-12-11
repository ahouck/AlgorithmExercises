/**
 * PROBLEM: Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    
    var startIndex = 0;
    var map = {};
    var max = 0;
    for(var i = 0; i < s.length; i++) {
       if(map[s[i]] >= startIndex) {
            startIndex = map[s[i]] + 1;
       } 
        map[s[i]] = i;
        max = i - startIndex + 1 > max ? i - startIndex + 1 : max;
    }
    return max;

};
