/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let ans = 0;

    for (let left = 0; left < n; left++) {
        let countTarget = 0;

        for (let right = left; right < n; right++) {

            if (nums[right] === target)
                countTarget++;

            const len = right - left + 1;

            if (2 * countTarget > len)
                ans++;
        }
    }

    return ans;
};