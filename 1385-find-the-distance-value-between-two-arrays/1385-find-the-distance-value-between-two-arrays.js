/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    const isValid = (n, arr, d) => {
        for (const e of arr) {
            if (Math.abs(e - n) <= d) return false;
        }
        return true;
    };

    let c = 0;
    for (const n of arr1) {
        if (isValid(n, arr2, d)) c++;
    }
    return c;
};