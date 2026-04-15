/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let n = words.length;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            let clockwise = (i - startIndex + n) % n;
            let anticlockwise = (startIndex - i + n) % n;
            ans = Math.min(ans, Math.min(clockwise, anticlockwise));
        }
    }

    return ans === Infinity ? -1 : ans;
};