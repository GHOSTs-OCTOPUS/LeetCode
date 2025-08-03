/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let left = 0, sum = 0, max = 0;
    for (let right = 0; right < fruits.length; right++) {
        sum += fruits[right][1];
        while (left <= right && minSteps(fruits[left][0], fruits[right][0], startPos) > k) {
            sum -= fruits[left][1];
            left++;
        }
        max = Math.max(max, sum);
    }
    return max;
};

function minSteps(left, right, start) {
    return Math.min(
        Math.abs(start - left) + (right - left),
        Math.abs(start - right) + (right - left)
    );
}