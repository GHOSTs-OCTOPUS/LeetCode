/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const vis = new Array(arr.length).fill(false);

    const dfs = (i) => {
        if (i < 0 || i >= arr.length || vis[i]) return false;
        if (arr[i] === 0) return true;
        vis[i] = true;
        return dfs(i + arr[i]) || dfs(i - arr[i]);
    };

    return dfs(start);
};