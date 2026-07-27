/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let d1 = 0, d2 = 0;

    for (const a of nums) {
        if (d1 <= a) {
            d2 = d1;
            d1 = a;
        } else if (d2 < a) {
            d2 = a;
        }
    }

    return (d1 - 1) * (d2 - 1);
};