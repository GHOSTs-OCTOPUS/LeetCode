/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = (n, edges) => {
    const A = Array.from({ length: n }, () => []);

    for (const [x, y] of edges) {
        A[x].push(y);
        A[y].push(x);
    }

    const vis = Array.from({ length: n }, () => false);
    let res = 0;

    vis.forEach((state, i) => {
        if (!state) {
            let vertex = 0, edge = 0;

            const dfs = x => {
                vertex++;
                edge += A[x].length;
                vis[x] = true;

                for (const state of A[x])
                    if (!vis[state])
                        dfs(state);
            };

            dfs(i);

            res += edge === vertex * (vertex - 1);
        }
    });

    return res;
};