/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const m = grid.length, n = grid[0].length;
    let total = 0;
    
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            total += grid[i][j];
    
    if (total % 2 !== 0) return false;
    
    const target = total / 2;
    let sum = 0;
    
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++)
            sum += grid[i][j];
        if (sum === target) return true;
    }
    
    sum = 0;
    
    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < m; i++)
            sum += grid[i][j];
        if (sum === target) return true;
    }
    
    return false;
};