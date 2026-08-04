/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {

    let mn = Math.min(...nums);
    let mx = Math.max(...nums);

    const seen = new Set(nums);

    const ans = [];

    for (let x = mn + 1; x < mx; x++) {

        if (!seen.has(x))
            ans.push(x);
    }

    return ans;
};