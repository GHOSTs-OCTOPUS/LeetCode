/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if (k % 2 === 0 || k % 5 === 0){
        return -1;
    }
    let remain = 0;
    let l = 0;
    for (let i = 1; i <= k; i++){
        remain = (remain * 10 + 1) % k;
        l++;
        if (remain === 0){
            return l;
        }
    }
    return l;
};