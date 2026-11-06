/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1]);
    let q = queries.map((t, i) => [t, i]).sort((a, b) => a[0] - b[0]);

    let cnt = Array(n + 1).fill(0);
    let ans = Array(queries.length);
    let l = 0, r = 0, active = 0;

    for (let [t, i] of q) {
        while (r < logs.length && logs[r][1] <= t) {
            if (++cnt[logs[r++][0]] === 1) active++;
        }

        while (l < r && logs[l][1] < t - x) {
            if (--cnt[logs[l++][0]] === 0) active--;
        }

        ans[i] = n - active;
    }

    return ans;
};