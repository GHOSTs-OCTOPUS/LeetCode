/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let n = nums.length;
    let prefix = new Array(n).fill(-1);
    let suffix = new Array(n).fill(-1);

    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], nums[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], nums[i + 1]);
    }

    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        res = Math.max(res, (prefix[i] - nums[i]) * suffix[i]);
    }

    return res;
};