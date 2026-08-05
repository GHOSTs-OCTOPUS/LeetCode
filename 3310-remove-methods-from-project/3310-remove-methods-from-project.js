/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    const vis = new Array(n).fill(false);

    function dfs(u) {
        vis[u] = true;

        for (const v of graph[u]) {
            if (!vis[v]) {
                dfs(v);
            }
        }
    }

    dfs(k);

    for (const [u, v] of invocations) {
        if (!vis[u] && vis[v]) {
            const ans = [];
            for (let i = 0; i < n; i++) {
                ans.push(i);
            }
            return ans;
        }
    }

    const ans = [];

    for (let i = 0; i < n; i++) {
        if (!vis[i]) {
            ans.push(i);
        }
    }

    return ans;
};