/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */

var findSubtreeSizes = function(p, s) {
    const n = p.length;
    const adj = Array.from({length: n}, () => []);
    const tree = Array.from({length: n}, () => []);
    const ans = Array(n).fill(0);
    const last = Array(26).fill(-1);

    for (let i = 1; i < n; i++)
        adj[p[i]].push(i);

    function dfs(u) {
        const c = s.charCodeAt(u) - 97;
        const old = last[c];

        if (u && old !== -1) p[u] = old;
        last[c] = u;

        for (const v of adj[u])
            dfs(v);

        last[c] = old;
    }

    function calc(u) {
        ans[u] = 1;
        for (const v of tree[u])
            ans[u] += calc(v);
        return ans[u];
    }

    dfs(0);

    for (let i = 1; i < n; i++)
        tree[p[i]].push(i);

    calc(0);
    return ans;
};