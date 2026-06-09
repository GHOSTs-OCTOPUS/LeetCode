/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    return (Math.max(...nums) - Math.min(...nums)) * k;
};