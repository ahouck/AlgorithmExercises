/**
 * PROBLEM: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * The input will not be sorted.
 * 
 * 
 * SOLUTION DESCRIPTION: loop through each input, determine if the map contains a complimentary number that added to the current number 
 * equals the target.  If not place the current number into the map and increment the array index.
 * 
 * SOLUTION COMPLEXTY: 0(n)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSumUniqueResult = function (nums, target) {
    let map = new Map();
    let compliment;

    for (let i = 0; i < nums.length; i++) {
        compliment = target - nums[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
};

/**
 * PROBLEM #2: Similar to the problem above, except the input may contain multiple solutions,
 * return all the unique pairs of numbers as an array of arrays, i.e. [[x,y], [a,b]]
 * 
 * Seen in Airbnb interview https://interviewing.io/recordings/Python-Airbnb-1
 * 
 * SOLUTION DESCRIPTION: loop through each input, determine if the map contains a complimentary number that added to the current number
 * equals the target.  If not place the current number into the map and increment the array index.
 *
 * COMPLEXTY: 0(n)
 * 
 * @param {number[]} nums - array of integers
 * @param {number} target - 
 * @return {number[[]]} 
 */

let twoSumMultipleSolutionSets = function (nums, target) {
    let map = new Map();
    let compliment;
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        compliment = target - nums[i];
        if (map.has(compliment)) {
            results[map.get(compliment), i]; //TBD how to not create duplicate output, i.e. [[3,4], [4,3]]
        }
        map.set(nums[i], i);
    }
}