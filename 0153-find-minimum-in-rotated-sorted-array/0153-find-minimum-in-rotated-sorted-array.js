/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {

    let s = 0, e = arr.length - 1;

    while (s < e) {

        let mid = Math.floor((s + e) / 2);

        // Minimum is in right half
        if (arr[mid] > arr[e]) {
            s = mid + 1;
        }

        // Minimum is in left half including mid
        else {
            e = mid;
        }
    }

    return arr[s];
};