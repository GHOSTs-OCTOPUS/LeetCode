/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const n = nums.length;
    let total = 0;

    for (const num of nums) {
        total += num;
    }

    const target = total - x;

    if (target === 0) {
        return n;
    }

    if (target < 0) {
        return -1;
    }

    let left = 0;
    let sum = 0;
    let maxLen = -1;

    for (let right = 0; right < n; right++) {
        sum += nums[right];

        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        if (sum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen === -1 ? -1 : n - maxLen;
};