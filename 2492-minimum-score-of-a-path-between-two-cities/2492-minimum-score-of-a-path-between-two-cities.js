/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const g = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, w] of roads) {
        g[u].push([v, w]);
        g[v].push([u, w]);
    }

    const vis = new Array(n + 1).fill(false);
    const q = [1];
    vis[1] = true;

    let ans = Infinity;

    for (let i = 0; i < q.length; i++) {
        const u = q[i];

        for (const [v, w] of g[u]) {
            ans = Math.min(ans, w);

            if (!vis[v]) {
                vis[v] = true;
                q.push(v);
            }
        }
    }

    return ans;
};