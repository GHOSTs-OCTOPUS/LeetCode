/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = 0;
    let sum = 0;
    for (const x of nums) {
        if (x > max) max = x;
        sum += x;
    }
    return max * nums.length - sum;
};