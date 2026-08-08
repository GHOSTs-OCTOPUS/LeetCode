/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {

    const n = word1.length, m = word2.length;
    const suf = new Array(n + 1).fill(0);
    let j = m - 1;
    
    for (let i = n - 1; i >= 0; i--) {
        if (j >= 0 && word1[i] === word2[j]) {
            j--;
        }
        suf[i] = m - 1 - j;
    }
    
    let i = 0;
    j = 0;
    let used_change = false;
    const result = [];
    
    while (j < m && i < n) {

        if (word1[i] === word2[j]) {
            result.push(i);
            i++;
            j++;

        } else {

            if (!used_change && suf[i + 1] >= m - (j + 1)) {
                result.push(i);
                used_change = true;
                i++;
                j++;
                
            } else {
                i++;
            }
        }
    }
    
    if (j === m) {
        return result;
    }
    return [];
};