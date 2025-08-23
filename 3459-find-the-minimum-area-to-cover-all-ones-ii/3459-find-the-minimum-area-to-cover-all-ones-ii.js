/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function(A) {
    const minimumArea = (B) => {
        if (!B.length || !B[0].length) return 0;
        let n = B.length, m = B[0].length;
        let left = Infinity, top = Infinity, right = -1, bottom = -1;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (B[i][j] === 1) {
                    left = Math.min(left, j);
                    top = Math.min(top, i);
                    right = Math.max(right, j);
                    bottom = Math.max(bottom, i);
                }
            }
        }
        if (right === -1) return 0;
        return (right - left + 1) * (bottom - top + 1);
    };
    const rotate = (B) => {
        let n = B.length, m = B[0].length;
        let rotated = Array.from({length: m}, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                rotated[j][n - 1 - i] = B[i][j];
            }
        }
        return rotated;
    };
    let res = Infinity;
    for (let rot = 0; rot < 4; rot++) {
        let n = A.length, m = A[0].length;
        for (let i = 1; i < n; i++) {
            let a1 = minimumArea(A.slice(0, i));
            for (let j = 1; j < m; j++) {
                let part2 = A.slice(i).map(r => r.slice(0, j));
                let part3 = A.slice(i).map(r => r.slice(j));
                let a2 = minimumArea(part2);
                let a3 = minimumArea(part3);
                res = Math.min(res, a1 + a2 + a3);
            }
            for (let i2 = i + 1; i2 < n; i2++) {
                let part2 = A.slice(i, i2);
                let part3 = A.slice(i2);
                let a2 = minimumArea(part2);
                let a3 = minimumArea(part3);
                res = Math.min(res, a1 + a2 + a3);
            }
        }
        A = rotate(A);
    }
    return res;
};