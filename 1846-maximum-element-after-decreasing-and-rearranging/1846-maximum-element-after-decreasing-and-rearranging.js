/**
 * @param {number[]} arr
 * @return {number}
 */
//translated using AI
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n = arr.length;
    const cnt = new Array(n + 1).fill(0);

    for (const x of arr) {
        cnt[Math.min(x, n)]++;
    }

    let val = 0;

    for (let i = 1; i <= n; i++) {
        val = Math.min(i, val + cnt[i]);
    }

    return val;
};