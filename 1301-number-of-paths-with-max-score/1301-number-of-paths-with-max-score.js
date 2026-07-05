/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1000000007;
    const n = board.length;

    const dp = Array.from({length:n}, () => Array(n).fill(-1));
    const ways = Array.from({length:n}, () => Array(n).fill(0));

    dp[n-1][n-1] = 0;
    ways[n-1][n-1] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (board[i][j] === 'X' || (i === n-1 && j === n-1))
                continue;

            let best = -1;
            let cnt = 0;

            const dir = [[1,0],[0,1],[1,1]];

            for (const [dx,dy] of dir) {
                const x = i + dx;
                const y = j + dy;

                if (x >= n || y >= n || dp[x][y] === -1)
                    continue;

                if (dp[x][y] > best) {
                    best = dp[x][y];
                    cnt = ways[x][y];
                } else if (dp[x][y] === best) {
                    cnt = (cnt + ways[x][y]) % MOD;
                }
            }

            if (best === -1) continue;

            const val = /\d/.test(board[i][j]) ? Number(board[i][j]) : 0;

            dp[i][j] = best + val;
            ways[i][j] = cnt;
        }
    }

    return dp[0][0] === -1 ? [0,0] : [dp[0][0], ways[0][0]];
};