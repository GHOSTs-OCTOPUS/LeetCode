/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = Array.from({ length: 2 }, () => 
        Array.from({ length: n }, () => Array(n + 1).fill(-1))
    );

    const solve = (person, i, M) => {
        if (i >= n) return 0;
        if (memo[person][i][M] !== -1) return memo[person][i][M];

        let result = person === 1 ? 0 : Infinity;
        let stones = 0;

        for (let x = 1; x <= Math.min(2 * M, n - i); x++) {
            stones += piles[i + x - 1];
            if (person === 1) {
                result = Math.max(result, stones + solve(0, i + x, Math.max(M, x)));
            } else {
                result = Math.min(result, solve(1, i + x, Math.max(M, x)));
            }
        }

        return memo[person][i][M] = result;
    };

    return solve(1, 0, 1);
};