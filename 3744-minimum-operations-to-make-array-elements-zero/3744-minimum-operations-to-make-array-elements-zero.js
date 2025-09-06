/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {
    let ans = 0n;
    for (let [l, r] of queries) {
        let S = 0n;
        let dMax = 0n;
        for (let k = 1; k <= 31; k++) {
            let low = 1n << BigInt(k - 1);
            let high = (1n << BigInt(k)) - 1n;
            if (low > BigInt(r)) break;
            let a = BigInt(Math.max(l, Number(low)));
            let b = BigInt(Math.min(r, Number(high)));
            if (a > b) continue;
            let cnt = b - a + 1n;
            let stepsForK = BigInt(Math.floor((k + 1) / 2));
            S += cnt * stepsForK;
            if (stepsForK > dMax) dMax = stepsForK;
        }
        let ops = dMax > (S + 1n) / 2n ? dMax : (S + 1n) / 2n;
        ans += ops;
    }
    return Number(ans);
};