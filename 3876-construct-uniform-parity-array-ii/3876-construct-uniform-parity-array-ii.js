/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let minOdd = Infinity;
    let minEven = Infinity;

    for (const x of nums1) {
        if (x % 2 === 0) {
            minEven = Math.min(minEven, x);
        } else {
            minOdd = Math.min(minOdd, x);
        }
    }

    if (minOdd === Infinity) {
        return true;
    }

    return minOdd < minEven;
};