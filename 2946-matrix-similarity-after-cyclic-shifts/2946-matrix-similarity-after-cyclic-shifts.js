/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    let m = mat.length, n = mat[0].length;
    k %= n;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let newCol;
            if (i % 2 === 0)
                newCol = (j + k) % n;
            else
                newCol = (j - k % n + n) % n;

            if (mat[i][j] !== mat[i][newCol])
                return false;
        }
    }
    return true;
};