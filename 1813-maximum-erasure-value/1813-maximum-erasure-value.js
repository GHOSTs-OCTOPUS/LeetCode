/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let currentSum = 0;
    let maxSum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            currentSum -= nums[left];
            seen.delete(nums[left]);
            left++;
        }
        currentSum += nums[right];
        seen.add(nums[right]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};