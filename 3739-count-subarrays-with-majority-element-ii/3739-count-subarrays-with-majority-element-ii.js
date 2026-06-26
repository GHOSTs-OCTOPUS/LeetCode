/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let pref = n;

    const freq = new Array(2 * n + 1).fill(0);
    freq[n] = 1;

    let less = 0;
    let ans = 0;

    for (const num of nums) {
        if (num === target) {
            less += freq[pref];
            pref++;
        } else {
            pref--;
            less -= freq[pref];
        }

        freq[pref]++;
        ans += less;
    }

    return ans;
};