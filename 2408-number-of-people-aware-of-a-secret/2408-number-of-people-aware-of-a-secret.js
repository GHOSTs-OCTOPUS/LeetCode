/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1_000_000_007;
    if (n === 1) return 1;
    const dp = new Array(n+1).fill(0);
    dp[1] = 1;
    let window = 0;
    for (let i = 2; i <= n; i++) {
        const enter = i - delay;
        const exit  = i - forget;
        if (enter >= 1) window = (window + dp[enter]) % MOD;
        if (exit  >= 1) window = (window - dp[exit] + MOD) % MOD;
        dp[i] = window;
    }
    let ans = 0;
    const start = Math.max(1, n - forget + 1);
    for (let i = start; i <= n; i++) ans = (ans + dp[i]) % MOD;
    return ans;
};