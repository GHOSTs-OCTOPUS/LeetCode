/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function (nums) {
    const n = nums.length;
    const pre = new Int32Array(n + 1);
    const nxt = new Int32Array(n + 1).fill(n);
    for (let i = 0; i + 1 < n; i++) pre[i + 1] = pre[i] + (nums[i] > nums[i + 1] ? 1 : 0);
    for (let i = n - 2; i >= 0; i--) nxt[i] = nums[i] > nums[i + 1] ? i : nxt[i + 1];
    let ans = 0;
    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;
        let prev = 0;
        let ok = true;
        for (let s = 0; s < n; s += k) {
            const e = s + k - 1;
            const c = pre[e] - pre[s];
            let mn, mx;
            if (c > 1) { ok = false; break; }
            if (c === 1) {
                if (nums[e] > nums[s]) { ok = false; break; }
                const j = nxt[s];
                mn = nums[j + 1];
                mx = nums[j];
            } else {
                mn = nums[s];
                mx = nums[e];
            }
            if (mn < prev) { ok = false; break; }
            prev = mx;
        }
        if (ok) ans += k;
    }
    return ans;
};