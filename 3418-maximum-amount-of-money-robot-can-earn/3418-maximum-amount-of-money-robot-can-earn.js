/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;
    const INF = Number.MAX_SAFE_INTEGER;
    
    let dp = Array.from({ length: n + 1 }, () => Array(3).fill(-INF));

    for (let k = 0; k < 3; k++) {
        dp[1][k] = 0;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const x = coins[i][j];
            const col = j + 1;
            const next2 = Math.max(dp[col - 1][2] + x, dp[col][2] + x, 
                                   dp[col - 1][1], dp[col][1]);
            const next1 = Math.max(dp[col - 1][1] + x, dp[col][1] + x, 
                                   dp[col - 1][0], dp[col][0]);
            const next0 = Math.max(dp[col - 1][0], dp[col][0]) + x;

            dp[col][2] = next2;
            dp[col][1] = next1;
            dp[col][0] = next0;
        }
    }

    return dp[n][2];
};