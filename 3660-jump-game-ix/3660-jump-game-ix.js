/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    const n = nums.length;

    const suffixMin = new Array(n + 1);
    suffixMin[n] = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
    }

    const ans = new Array(n);
    let l = 0;

    while (l < n) {
        let r = l;
        let componentMax = nums[l];

        while (r + 1 < n && componentMax > suffixMin[r + 1]) {
            r++;
            componentMax = Math.max(componentMax, nums[r]);
        }

        for (let i = l; i <= r; i++) {
            ans[i] = componentMax;
        }

        l = r + 1;
    }

    return ans;
};