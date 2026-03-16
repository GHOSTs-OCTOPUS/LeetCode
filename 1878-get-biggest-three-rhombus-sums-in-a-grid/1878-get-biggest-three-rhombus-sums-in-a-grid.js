/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let top = [0, 0, 0];
    
    const add = (val) => {
        if (val === top[0] || val === top[1] || val === top[2]) return;
        if (val > top[0]) {
            top[2] = top[1];
            top[1] = top[0];
            top[0] = val;
        } else if (val > top[1]) {
            top[2] = top[1];
            top[1] = val;
        } else if (val > top[2]) {
            top[2] = val;
        }
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            add(grid[i][j]);
            let maxK = Math.min(i, m - 1 - i, j, n - 1 - j);
            for (let k = 1; k <= maxK; ++k) {
                let current_sum = 0;
                for (let step = 0; step < k; ++step) {
                    current_sum += grid[i - k + step][j + step];
                    current_sum += grid[i + step][j + k - step];
                    current_sum += grid[i + k - step][j - step];
                    current_sum += grid[i - step][j - k + step];
                }
                add(current_sum);
            }
        }
    }
    
    return top.filter(x => x > 0);
};