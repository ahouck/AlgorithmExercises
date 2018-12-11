/**
 * PROBLEM: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows 
 * like this: (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) return s;

    let arrayOfArrays = [s[0]];
    let rowIndex = numRows - 2;
    let flipper = -1;

    for (var i = 0; i < s.length; i++) {

        if (i < numRows) {
            arrayOfArrays[i] = s[i];
            continue;
        }

        arrayOfArrays[rowIndex] += s[i];

        if (rowIndex === 0 || rowIndex === (numRows - 1)) {
            flipper = flipper * (-1);
        }
        rowIndex += flipper;

    }

    return arrayOfArrays.join('');

};