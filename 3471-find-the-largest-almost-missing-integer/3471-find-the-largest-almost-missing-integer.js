/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;

    if (k === n) {
        return Math.max(...nums);
    }

    let arr = [];

    if (k === 1) {
        arr = nums.filter(
            x => nums.filter(y => y === x).length === 1
        );
    } else {
        arr = [nums[0], nums[n - 1]].filter(
            x => nums.filter(y => y === x).length === 1
        );
    }

    return arr.length ? Math.max(...arr) : -1;
};