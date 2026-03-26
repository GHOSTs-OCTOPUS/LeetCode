/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const prefRow = new Array(n).fill(0);
    const prefCol = new Array(m).fill(0);
    const mp = new Map();

    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < m; j++) {
            const val = grid[i][j];
            rowSum += val;
            if (!mp.has(val)) mp.set(val, []);
            mp.get(val).push([i, j]);
        }
        prefRow[i] = rowSum + (i > 0 ? prefRow[i - 1] : 0);
    }

    for (let j = 0; j < m; j++) {
        let colSum = 0;
        for (let i = 0; i < n; i++) {
            colSum += grid[i][j];
        }
        prefCol[j] = colSum + (j > 0 ? prefCol[j - 1] : 0);
    }

    const total = prefRow[n - 1];

    const canRemove = (r1, c1, r2, c2, i, j) => {
        const rows = r2 - r1 + 1;
        const cols = c2 - c1 + 1;
        if (rows * cols <= 1) return false;
        if (rows === 1) return j === c1 || j === c2;
        if (cols === 1) return i === r1 || i === r2;
        return true;
    };

    
    for (let i = 0; i < n - 1; i++) {
        const top = prefRow[i];
        const bottom = total - top;
        if (top === bottom) return true;

        const diff = Math.abs(top - bottom);
        if (mp.has(diff)) {
            const coords = mp.get(diff);
            for (let k = 0; k < coords.length; k++) {
                const [x, y] = coords[k];
                if (top > bottom) {
                    if (x <= i && canRemove(0, 0, i, m - 1, x, y)) return true;
                } else {
                    if (x > i && canRemove(i + 1, 0, n - 1, m - 1, x, y)) return true;
                }
            }
        }
    }

    
    for (let j = 0; j < m - 1; j++) {
        const left = prefCol[j];
        const right = total - left;
        if (left === right) return true;

        const diff = Math.abs(left - right);
        if (mp.has(diff)) {
            const coords = mp.get(diff);
            for (let k = 0; k < coords.length; k++) {
                const [x, y] = coords[k];
                if (left > right) {
                    if (y <= j && canRemove(0, 0, n - 1, j, x, y)) return true;
                } else {
                    if (y > j && canRemove(0, j + 1, n - 1, m - 1, x, y)) return true;
                }
            }
        }
    }

    return false;
};