/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    /**
    let count = [];
    for (let row of grid){
        for (let num of row){
            count.push(num);
        }
    }
    count.sort((a, b) => a - b);
    for (let c of count){
        if (Math.abs(c - count[0]) % x !== 0){
            return -1;
        }
    }
    let cost = count[Math.floor(count.length / 2)];
    let op = 0;
    for (let c of count){
        op += Math.abs(c - cost) / x;
    }
    return op;
    */
    let res = [];

    for (let row of grid) {
        for (let v of row) 
            res.push(v);

    }
    let mod = res[0] % x;
    for (let v of res) {
        if (v % x !== mod) 
            return -1;

    }
    res.sort((a, b) => a - b);
    let m = res[Math.floor(res.length / 2)];
    let cnt = 0;
    for (let v of res) {
        cnt += Math.abs(v - m) / x;
    }
    return cnt;
};