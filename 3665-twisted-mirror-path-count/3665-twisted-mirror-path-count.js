/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const mod = 1_000_000_007;
    const down = new Array(grid[0].length).fill(0);  // ways to enter each cell from above
    down[0] = 1;
    for (const row of grid) {
        let right = 0;  // ways to enter the current cell from the left
        for (const [j, mirror] of row.entries()) {
            if (mirror) {  // a mirror swaps the flows
                [right, down[j]] = [down[j], right];
            } else {  // an empty cell merges them
                right = down[j] = (right + down[j]) % mod;
            }
        }
    }
    return down[down.length - 1];
};