//translated using AI
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let lastA = -1, lastB = -1, lastC = -1;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a')
            lastA = i;
        else if (s[i] === 'b')
            lastB = i;
        else
            lastC = i;

        if (lastA !== -1 && lastB !== -1 && lastC !== -1) {
            total += Math.min(lastA, lastB, lastC) + 1;
        }
    }

    return total;
};