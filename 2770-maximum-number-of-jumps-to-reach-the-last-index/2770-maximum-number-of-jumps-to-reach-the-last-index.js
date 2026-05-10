/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {

    let n = nums.length;

    // dp[i] stores maximum jumps to reach index i
    let dp = new Array(n).fill(-1);

    // Starting index needs 0 jumps
    dp[0] = 0;

    for(let i = 1; i < n; i++) {

        // Check all previous indices
        for(let j = 0; j < i; j++) {

            // Valid jump and previous index reachable
            if(Math.abs(nums[i] - nums[j]) <= target && dp[j] !== -1) {

                // Update maximum jumps
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[n - 1];
};