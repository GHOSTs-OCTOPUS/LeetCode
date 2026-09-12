/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(I) {
    let A = I.map((v, i) => [v[0], v[1], v[2], i]).sort((a,b) => a[0]-b[0] || a[1]-b[1] || a[3]-b[3]);
    let S = A.map(x => x[0]), n = A.length;
    let dp = Array.from({length: n + 1}, () => Array.from({length: 5}, () => [0, []]));

    const isLex = (a, b) => {
        if (!b.length) return true;
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] < b[i];
        }
        return a.length < b.length;
    };

    for (let i = n - 1; i >= 0; i--) {
        let [l, r, w, id] = A[i];
        let low = 0, high = n;
        while (low < high) { let m = (low + high) >> 1; S[m] > r ? high = m : low = m + 1; }

        for (let k = 1; k <= 4; k++) {
            let [bw, bids] = dp[i + 1][k];
            let [pw, pids] = dp[low][k - 1];
            let tw = pw + w, tids = [...pids, id].sort((a,b) => a-b);

            let isBetter = tw > bw || (tw === bw && isLex(tids, bids));
            dp[i][k] = isBetter ? [tw, tids] : [bw, bids];
        }
    }
    return dp[0][4][1];
};