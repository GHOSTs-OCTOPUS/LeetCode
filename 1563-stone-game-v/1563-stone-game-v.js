/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {

    const n = stoneValue.length;

    const dp = Array.from(
        { length: n },
        () => Array(n).fill(-1)
    );

    function game(i, j, total) {

        if (i >= j)
            return 0;

        if (dp[i][j] !== -1)
            return dp[i][j];

        let ans = 0;
        let sumTillK = 0;

        for (let k = i; k < j; k++) {

            sumTillK += stoneValue[k];

            const sumAfterK = total - sumTillK;

            if (sumTillK > sumAfterK) {

                ans = Math.max(
                    ans,
                    sumAfterK +
                    game(k + 1, j, sumAfterK)
                );

            } else if (sumTillK < sumAfterK) {

                ans = Math.max(
                    ans,
                    sumTillK +
                    game(i, k, sumTillK)
                );

            } else {

                ans = Math.max(
                    ans,
                    sumTillK +
                    Math.max(
                        game(k + 1, j, sumAfterK),
                        game(i, k, sumTillK)
                    )
                );
            }
        }

        return dp[i][j] = ans;
    }

    const totalSum = stoneValue.reduce(
        (sum, x) => sum + x,
        0
    );

    return game(0, n - 1, totalSum);
};