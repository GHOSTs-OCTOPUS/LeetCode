/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    const INF = 1e18;
    const dp = Array(n + 1).fill(INF);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let jump = 1; jump <= 3; jump++) {
            const j = i + jump;
            if (j <= n) {
                dp[j] = Math.min(dp[j],
                    dp[i] + costs[j - 1] + jump * jump);
            }
        }
    }
    return dp[n];
};
