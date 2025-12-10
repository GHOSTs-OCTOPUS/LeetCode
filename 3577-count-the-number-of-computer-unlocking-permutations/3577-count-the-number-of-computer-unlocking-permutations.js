const MOD = 1_000_000_007;

/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function (complexity) {
    const n = complexity.length;
    const first = complexity[0];

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= first) return 0;
    }

    let fact = 1;
    for (let i = 2; i < n; i++) {
        fact = (fact * i) % MOD;
    }

    return fact;
};