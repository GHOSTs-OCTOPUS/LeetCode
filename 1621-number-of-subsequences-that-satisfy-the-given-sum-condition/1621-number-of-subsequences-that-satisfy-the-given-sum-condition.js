/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const power = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        power[i] = (power[i - 1] * 2) % mod;
    }

    let left = 0, right = n - 1, result = 0;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            result = (result + power[right - left]) % mod;
            left++;
        } else {
            right--;
        }
    }

    return result;
};