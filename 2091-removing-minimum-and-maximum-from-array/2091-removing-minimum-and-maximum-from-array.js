/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let n = nums.length;
    let minIdx = 0;
    let maxIdx = 0;

    for(let i = 1; i < n; i++) {
        if(nums[minIdx] > nums[i])
            minIdx = i;

        if(nums[maxIdx] < nums[i])
            maxIdx = i;
    }

    let right = Math.max(minIdx, maxIdx);
    let left = Math.min(minIdx, maxIdx);

    let res = right + 1;
    res = Math.min(res, n - left);
    res = Math.min(res, (left + 1) + (n - right));

    return res;
};