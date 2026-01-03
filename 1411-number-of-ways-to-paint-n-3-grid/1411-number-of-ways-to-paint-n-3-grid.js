/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1000000007;
    let A = 6, B = 6;

    for (let i = 2; i <= n; i++) {
        const newA = (2 * A + 2 * B) % MOD;
        const newB = (2 * A + 3 * B) % MOD;
        A = newA;
        B = newB;
    }

    return (A + B) % MOD;
};