/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let n = matrix[0].length;
    let height = Array(n).fill(0);
    let ans = 0;

    for (let row of matrix) {
        for (let i = 0; i < n; i++)
            height[i] = row[i] === '1' ? height[i] + 1 : 0;

        let stack = [];
        for (let i = 0; i <= n; i++) {
            let cur = i === n ? 0 : height[i];
            while (stack.length && height[stack[stack.length-1]] > cur) {
                let h = height[stack.pop()];
                let w = stack.length === 0 ? i : i - stack[stack.length-1] - 1;
                ans = Math.max(ans, h * w);
            }
            stack.push(i);
        }
    }
    return ans;
};


