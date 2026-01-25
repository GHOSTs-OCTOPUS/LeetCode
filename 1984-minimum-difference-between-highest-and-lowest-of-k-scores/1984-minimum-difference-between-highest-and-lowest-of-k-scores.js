/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a - b)
    let ans = Infinity, j = k - 1
    for(let i = 0; i + j < nums.length; i++) {
        ans = Math.min(ans, nums[i + j] - nums[i])
    }
    return ans
};