/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const length = m + n - 1;

    if (length % 2 === 1 || grid[0][0] !== "(" || grid[m - 1][n - 1] !== ")") {
        return false;
    }

    // 0: unknown, 1: false, 2: true
    const memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Uint8Array(length + 1)),
    );

    function dfs(row, col, balance) {
        balance += grid[row][col] === "(" ? 1 : -1;
        const remaining = m - 1 - row + (n - 1 - col);

        if (balance < 0 || balance > remaining) return false;
        if (row === m - 1 && col === n - 1) return balance === 0;

        if (memo[row][col][balance] !== 0) {
            return memo[row][col][balance] === 2;
        }

        const possible =
            (row + 1 < m && dfs(row + 1, col, balance)) ||
            (col + 1 < n && dfs(row, col + 1, balance));

        memo[row][col][balance] = possible ? 2 : 1;
        return possible;
    }

    return dfs(0, 0, 0);
};