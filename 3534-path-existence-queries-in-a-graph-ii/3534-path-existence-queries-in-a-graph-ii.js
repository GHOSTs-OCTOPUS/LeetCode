/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const order = Array.from({length: n}, (_, i) => i).sort((a, b) => nums[a] - nums[b]);
    const pos = new Int32Array(n);
    const val = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        pos[order[i]] = i;
        val[i] = nums[order[i]];
    }

    const reach = new Int32Array(n);
    for (let i = 0, j = 0; i < n; i++) {
        if (j < i) j = i;
        while (j + 1 < n && val[j + 1] - val[i] <= maxDiff) j++;
        reach[i] = j;
    }

    const comp = new Int32Array(n);
    for (let i = 1; i < n; i++)
        comp[i] = comp[i - 1] + (val[i] - val[i - 1] > maxDiff ? 1 : 0);

    let LOG = 1;
    while ((1 << LOG) < n) LOG++;
    const jump = Array.from({length: LOG}, () => new Int32Array(n));
    jump[0].set(reach);
    for (let k = 1; k < LOG; k++)
        for (let i = 0; i < n; i++)
            jump[k][i] = jump[k - 1][jump[k - 1][i]];

    return queries.map(([u, v]) => {
        let pu = pos[u], pv = pos[v];
        if (comp[pu] !== comp[pv]) return -1;
        if (pu === pv) return 0;
        if (pu > pv) [pu, pv] = [pv, pu];
        let dist = 0, cur = pu;
        for (let k = LOG - 1; k >= 0; k--) {
            if (jump[k][cur] < pv) { cur = jump[k][cur]; dist += 1 << k; }
        }
        if (cur < pv) dist++;
        return dist;
    });
};