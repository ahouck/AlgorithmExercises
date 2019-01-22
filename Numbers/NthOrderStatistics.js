/**
 * Assume the input array is as long as the minimum position required. I.E if you want the 3rd smallest number 
 * the array is at least of length 3
 */

/**
 * First Order statistic aka smallest number in an `unordered` set
 * 
 * SOLUTION: Loop through array setting number to min if it is smaller than min or min is not defined;
 * 
 * COMPLEXITY: O(n) most efficient solution for unsorted array
 * @param {Array} nums
 */
function findSmallestNumberInArray(nums) {
    let min = nums[0];
    //Beceause we initialize the min placeholder with the first value
    //start looping with the second value.
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

//Just to refresh myself on implementing quicksort
//I prefer to use new arrays instead of in-place array manipulation, more organized for me
function quicksort(arr) {
    if (arr.length <= 1) {
        //base case
        return arr;
    }

    let left = [];
    let right = [];
    let pivot = arr.pop(); //use last element

    arr.forEach(n => {
        if (n <= pivot) {
            //left contains numbers smaller than the pivot
            left.push(n);
        } else {
            //right contains numbers larger than the pivot
            right.push(n);
        }
    });

    return [...quicksort(left), pivot, ...quicksort(right)];
}

/**
 * Seen in Google interview
 * 
 * PROBLEM: Find an O(n) solution to return the nth smallest number in an array
 * The array length will always be at least n
 * The array is unsorted
 * 
 * SOLUTION: Utilizing a quicksort based method, pop a number from the array to become the pivot. All numbers less than the pivot go in
 * the "left" array all numbers greater than the pivot go in the right.  The kth position of the pivot is the length of the left array + 1.
 * If the position of the pivot is the kth position we are looking for, return the pivot. Otherwise recursively call the function with the left array if the kth position
 * is lower than the pivot position, or the right array if the position is higher until we have a pivot that is at the kth position.
 * 
 * COMPLEXITY: O(n) on average, worst case O(n^2), input could be randomized
 * 
 * @param {Number} positionToFind
 * @param {Array} nums 
 */
function findKthElement(positionToFind, nums) {
    let left = [];
    let right = [];
    let pivot = nums.pop();

    nums.forEach(n => {
        if (n <= pivot) {
            //left contains numbers smaller than the pivot
            left.push(n);
        } else {
            //right contains numbers larger than the pivot
            right.push(n);
        }
    });

    if (left.length > positionToFind) {
        //Kth element is somewhere in the lower half, search it
        return findKthElement(positionToFind, left);
    } else if (left.length + 1 === positionToFind) {
        //The pivot is at the position we are trying to find
        return pivot;
    } else {
        //Kth element is somewhere in the upper half, search it

        //Need to adjust the position index since we are discarding the lower half of the 
        //original array.
        const newPositionIndex = (positionToFind - (left.length + 1));
        //console.log(`Now trying to find ${newPositionIndex}`);
        return findKthElement(newPositionIndex, right);
    }
}


//Test Driver
let input = [3, 20, 2, 17, 5, 4, 1, 16, 0, 9, 6];
const orderedArray = quicksort(input);
console.log(`Original Array Order ${input}`);
console.log(`Sorted Array: ${orderedArray}`);
console.log(`The 9th smallest integer is ${findKthElement(9, [3, 20, 2, 17, 5, 4, 1, 16, 0, 9, 6])}, expected: ${orderedArray[8]}`); // Need to deep copy the array
console.log(`The 3rd smallest integer is ${findKthElement(3, input)}, expected: ${orderedArray[2]}`);