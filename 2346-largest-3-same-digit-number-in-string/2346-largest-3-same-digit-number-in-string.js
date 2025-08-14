/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let best = "";
    for (let i = 0; i + 2 < num.length; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let cur = num.substring(i, i+3);
            if (cur > best) best = cur;
        }
    }
    return best;
};