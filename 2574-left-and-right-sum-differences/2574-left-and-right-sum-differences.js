/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    
    const n = nums.length;

    let rightSum = 0;
    for (const num of nums) {
        rightSum += num;
    }

    let leftSum = 0;

    const ans = new Array(n);

    for (let i = 0; i < n; i++) {

        rightSum -= nums[i];

        ans[i] = Math.abs(leftSum - rightSum);

        leftSum += nums[i];
    }

    return ans;
};