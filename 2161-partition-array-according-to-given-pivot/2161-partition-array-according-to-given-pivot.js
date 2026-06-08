/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let x = [], y = [], z = [];
    for (let i of nums) {
        if (i < pivot) {
            x.push(i);
        } else if (i > pivot) {
            z.push(i);
        } else {
            y.push(i);
        }
    }
    return x.concat(y, z);
};