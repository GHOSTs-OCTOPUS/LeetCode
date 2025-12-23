/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const n = events.length;
    events.sort((a, b) => a[0] - b[0]);

    const start = new Array(n);
    const end = new Array(n);
    const val = new Array(n);

    for (let i = 0; i < n; i++) {
        start[i] = events[i][0];
        end[i] = events[i][1];
        val[i] = events[i][2];
    }
    const suffixMax = new Array(n);
    suffixMax[n - 1] = val[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = val[i] > suffixMax[i + 1] ? val[i] : suffixMax[i + 1];
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        let l = i + 1, r = n;
        while (l < r) {
            const m = (l + r) >>> 1;
            if (start[m] > end[i]) r = m;
            else l = m + 1;
        }

        if (l < n) {
            const sum = val[i] + suffixMax[l];
            if (sum > ans) ans = sum;
        }

        if (val[i] > ans) ans = val[i];
    }

    return ans;
};