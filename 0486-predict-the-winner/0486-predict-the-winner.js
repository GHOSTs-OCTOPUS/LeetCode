/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;

    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;

            const takeLeft = nums[i] - dp[i + 1][j];

            const takeRight = nums[j] - dp[i][j - 1];

            dp[i][j] = Math.max(takeLeft, takeRight);
        }
    }

    return dp[0][n - 1] >= 0;
};