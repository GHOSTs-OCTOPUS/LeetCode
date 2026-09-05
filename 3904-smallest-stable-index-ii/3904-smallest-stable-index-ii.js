/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Added using AI
var firstStableIndex = function(nums, k) {
    const n = nums.length;
    const mn = new Array(n);
    mn[n-1] = nums[n-1] ;
    for (let i = n-2; i >= 0; i--)
        mn[i] = Math.min(nums[i], mn[i+1]);
    let mxi = -Infinity;
    for (let i = 0; i < n; i++) {
        mxi = Math.max(mxi, nums[i]) ;
        if (mxi - mn[i] <= k) return i;
    }
    return -1;
};