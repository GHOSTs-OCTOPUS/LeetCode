/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {

    let rows = grid.length;
    let cols = grid[0].length;

    let totalLayers = Math.min(rows, cols) / 2;

    for(let layer = 0; layer < totalLayers; layer++) {

        let elements = [];

        let top = layer;
        let left = layer;

        let bottom = rows - layer - 1;
        let right = cols - layer - 1;

        for(let col = left; col <= right; col++)
            elements.push(grid[top][col]);

        for(let row = top + 1; row <= bottom - 1; row++)
            elements.push(grid[row][right]);

        for(let col = right; col >= left; col--)
            elements.push(grid[bottom][col]);

        for(let row = bottom - 1; row >= top + 1; row--)
            elements.push(grid[row][left]);

        let size = elements.length;
        let index = k % size;

        for(let col = left; col <= right; col++) {
            grid[top][col] = elements[index];
            index = (index + 1) % size;
        }

        for(let row = top + 1; row <= bottom - 1; row++) {
            grid[row][right] = elements[index];
            index = (index + 1) % size;
        }

        for(let col = right; col >= left; col--) {
            grid[bottom][col] = elements[index];
            index = (index + 1) % size;
        }

        for(let row = bottom - 1; row >= top + 1; row--) {
            grid[row][left] = elements[index];
            index = (index + 1) % size;
        }
    }

    return grid;
};