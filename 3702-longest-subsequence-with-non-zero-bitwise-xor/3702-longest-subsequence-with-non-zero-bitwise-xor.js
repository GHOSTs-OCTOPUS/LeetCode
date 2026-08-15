/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    const n = nums.length;

    if (nums.every(num => num === 0)) {
        return 0;
    }

    let x = 0;

    for (const num of nums) {
        x ^= num;
    }

    return x ? n : n - 1;
};