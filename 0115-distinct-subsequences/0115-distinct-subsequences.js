/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = t.length;

    const dp = new Array(m + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < s.length; i++) {
        // Traverse backwards to avoid using an updated
        // dp[j - 1] from the same iteration.
        for (let j = m; j >= 1; j--) {
            if (s[i] === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[m];
};