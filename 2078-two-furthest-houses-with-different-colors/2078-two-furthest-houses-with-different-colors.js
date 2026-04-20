/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            ans = Math.max(ans, n - 1 - i);
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            ans = Math.max(ans, i);
        }
    }

    return ans;
};