/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let min_diff = Infinity;
    for (let i = 0; i < n - 1; i++){
        min_diff = Math.min(min_diff, arr[i + 1] - arr[i]);
    }
    const res = [];
    for (let i = 0; i < n - 1; i++){
        if (arr[i + 1] - arr[i] === min_diff){
            res.push([arr[i], arr[i + 1]]);
        }
    }
    return res;
};