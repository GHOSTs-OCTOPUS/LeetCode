// You can use either `var numberOfWays = function(n, x) { ... }` or a class method.
const MOD = 1_000_000_007;

var numberOfWays = function(n, x) {
    const powers = [];
    for (let i = 1;; ++i) {
        let p = 1;
        for (let k = 0; k < x; ++k) p *= i;
        if (p > n) break;
        powers.push(p);
    }

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (const p of powers) {
        for (let s = n; s >= p; --s) {
            dp[s] = (dp[s] + dp[s - p]) % MOD;
        }
    }
    return dp[n];
};
