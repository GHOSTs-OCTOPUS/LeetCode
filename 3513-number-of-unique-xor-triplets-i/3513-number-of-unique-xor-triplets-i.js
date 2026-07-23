/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;

    if (n <= 2) return n;

    let bits = 0;
    let x = n;
    while (x > 0) {
        bits++;
        x >>= 1;
    }

    return 1 << bits;
};