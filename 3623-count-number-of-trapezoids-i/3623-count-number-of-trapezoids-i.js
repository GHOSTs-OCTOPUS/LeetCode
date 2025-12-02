/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    const MOD = 1000000007n;
    const INV2 = (MOD + 1n) / 2n;

    const freq = new Map();
    for (const [x, y] of points) {
        const key = BigInt(y);
        freq.set(key, (freq.get(key) || 0n) + 1n);
    }

    let sumF = 0n;
    let sumF2 = 0n;

    for (const cBig of freq.values()) {
        const c = cBig;
        if (c >= 2n) {
            const f = (c * (c - 1n) / 2n) % MOD;
            sumF = (sumF + f) % MOD;
            sumF2 = (sumF2 + (f * f) % MOD) % MOD;
        }
    }

    let ans = (sumF * sumF) % MOD;
    ans = (ans - sumF2 + MOD) % MOD;
    ans = (ans * INV2) % MOD;

    return Number(ans);
};