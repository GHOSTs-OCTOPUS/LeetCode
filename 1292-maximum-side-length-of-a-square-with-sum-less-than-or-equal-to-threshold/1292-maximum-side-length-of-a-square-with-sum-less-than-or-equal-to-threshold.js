/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const m = mat.length, n = mat[0].length;

    const pref = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            pref[i][j] =
                mat[i-1][j-1]
              + pref[i-1][j]
              + pref[i][j-1]
              - pref[i-1][j-1];
        }
    }

    let maxSide = Math.min(m, n);

    while (maxSide > 0) {
        for (let i = 0; i + maxSide <= m; i++) {
            for (let j = 0; j + maxSide <= n; j++) {
                const sum =
                    pref[i+maxSide][j+maxSide]
                  - pref[i][j+maxSide]
                  - pref[i+maxSide][j]
                  + pref[i][j];
                if (sum <= threshold) return maxSide;
            }
        }
        maxSide--;
    }
    return 0;
};