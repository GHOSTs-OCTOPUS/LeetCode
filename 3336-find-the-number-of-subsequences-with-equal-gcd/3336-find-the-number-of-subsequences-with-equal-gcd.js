/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const MAX = 200;

    let dp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));
    dp[0][0] = 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            const t = a % b;
            a = b;
            b = t;
        }
        return a;
    };

    for (const x of nums) {
        let next = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

        for (let g1 = 0; g1 <= MAX; g1++) {
            for (let g2 = 0; g2 <= MAX; g2++) {
                if (dp[g1][g2] === 0) continue;

                const ways = dp[g1][g2];

                next[g1][g2] = (next[g1][g2] + ways) % MOD;

                const ng1 = (g1 === 0) ? x : gcd(g1, x);
                next[ng1][g2] = (next[ng1][g2] + ways) % MOD;

                const ng2 = (g2 === 0) ? x : gcd(g2, x);
                next[g1][ng2] = (next[g1][ng2] + ways) % MOD;
            }
        }

        dp = next;
    }

    let ans = 0;

    for (let g = 1; g <= MAX; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};