/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const m = grid.length, n = grid[0].length, dirs = [1, 0, -1, 0, 1];  // down, left, up, right
    let ans = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            if (!grid[i][j]) continue;
            let total = grid[i][j];  // can reach 1e11: still exact in a JS number
            grid[i][j] = 0;
            const island = [[i, j]];
            for (let h = 0; h < island.length; h++) {  // the list grows while we walk it: a BFS queue
                const [x, y] = island[h];
                for (let d = 0; d < 4; d++) {
                    const a = x + dirs[d], b = y + dirs[d + 1];
                    if (a >= 0 && a < m && b >= 0 && b < n && grid[a][b]) {
                        total += grid[a][b];
                        grid[a][b] = 0;  // sink it so it's counted once
                        island.push([a, b]);
                    }
                }
            }
            if (total % k === 0) ans++;
        }
    return ans;
};