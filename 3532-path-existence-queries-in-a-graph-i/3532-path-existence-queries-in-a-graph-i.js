/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const comp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        if (Math.abs(nums[i] - nums[i - 1]) <= maxDiff)
            comp[i] = comp[i - 1];
        else
            comp[i] = comp[i - 1] + 1;
    }

    const res = [];

    for (const [u, v] of queries)
        res.push(comp[u] === comp[v]);

    return res;
};