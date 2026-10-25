/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const m = grid.length, n = grid[0].length;
    const closed = (i, j) => {  // flood the island through (i, j); 1 if it never reaches the border
        if (i < 0 || i >= m || j < 0 || j >= n) return 0;  // stepped off the grid: the island touches the border
        if (grid[i][j]) return 1;  // water, or land we already flooded
        grid[i][j] = 1;  // visited: turn it into water
        return closed(i + 1, j) & closed(i - 1, j) & closed(i, j + 1) & closed(i, j - 1);  // & (not &&) floods all 4 sides
    };
    let count = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (!grid[i][j]) count += closed(i, j);
    return count;
};