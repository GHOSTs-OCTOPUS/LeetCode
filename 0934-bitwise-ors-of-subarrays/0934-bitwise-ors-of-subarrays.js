/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let res = new Set();
    let cur = new Set();

    for (let num of arr) {
        let next = new Set();
        next.add(num);
        for (let x of cur) {
            next.add(x | num);
        }
        cur = next;
        for (let x of cur) res.add(x);
    }

    return res.size;
};