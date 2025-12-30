/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const r = grid.length, c = grid[0].length;
    if (r < 3 || c < 3) return 0;

    let ans = 0;
    for (let i = 0; i + 2 < r; i++) {
        for (let j = 0; j + 2 < c; j++) {
            let used = Array(10).fill(false);
            let ok = true;

            for (let x = 0; x < 3 && ok; x++) {
                for (let y = 0; y < 3; y++) {
                    const v = grid[i + x][j + y];
                    if (v < 1 || v > 9 || used[v]) {
                        ok = false;
                        break;
                    }
                    used[v] = true;
                }
            }
            if (!ok) continue;

            const s = grid[i][j] + grid[i][j+1] + grid[i][j+2];
            for (let x = 0; x < 3; x++)
                if (grid[i+x][j] + grid[i+x][j+1] + grid[i+x][j+2] !== s) ok = false;
            for (let y = 0; y < 3; y++)
                if (grid[i][j+y] + grid[i+1][j+y] + grid[i+2][j+y] !== s) ok = false;
            if (grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2] !== s) ok = false;
            if (grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] !== s) ok = false;

            if (ok) ans++;
        }
    }
    return ans;
};