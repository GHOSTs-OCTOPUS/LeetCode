/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const nonZeroCount = new Array(n + 1).fill(0);

    const digits = [];

    for (let i = 0; i < n; i++) {
        nonZeroCount[i + 1] = nonZeroCount[i];

        if (s[i] !== '0') {
            nonZeroCount[i + 1]++;
            digits.push(Number(s[i]));
        }
    }

    const k = digits.length;

    const prefixValue = new Array(k + 1).fill(0n);

    const prefixSum = new Array(k + 1).fill(0);

    const power10 = new Array(k + 1).fill(1n);

    for (let i = 0; i < k; i++) {
        prefixValue[i + 1] =
            (prefixValue[i] * 10n + BigInt(digits[i])) % MOD;

        prefixSum[i + 1] =
            prefixSum[i] + digits[i];

        power10[i + 1] =
            (power10[i] * 10n) % MOD;
    }

    return queries.map(([l, r]) => {
        const left = nonZeroCount[l];

        const right = nonZeroCount[r + 1];

        const len = right - left;

        const x = (
            prefixValue[right]
            - (prefixValue[left] * power10[len]) % MOD
            + MOD
        ) % MOD;

        const sum =
            prefixSum[right] - prefixSum[left];

        return Number((x * BigInt(sum)) % MOD);
    });
};