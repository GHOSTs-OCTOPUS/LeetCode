const countNegatives = grid => {
    const m = grid.length, n = grid[0].length;
    let i = m - 1, j = 0;

    let res = 0;
    
    while (i >= 0 && j < n) {
        if (grid[i][j] < 0) {
            res += n - j;
            i--;
        } else
            j++;
    }
    
    return res;
};