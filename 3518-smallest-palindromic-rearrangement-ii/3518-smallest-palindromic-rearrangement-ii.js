/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    // Build histogram
    const histo = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        histo[s[i].charCodeAt(0) - 97] += 1;
    }

    // Find middle + remove useless doubled values
    let mid = "";
    for (let i = 0; i < 26; i++) {
        if (histo[i] % 2 == 1) {
            mid = String.fromCharCode(97 + i);
        }
        histo[i] = Math.floor(histo[i] / 2);
    }

    // Check if solution exists
    if (checkCount(histo) < k) {
        return "";
    }
    let left = "";
    let count = histo.reduce((a, x) => a + x, 0);
    for (let j = 0; j < count; j++) {
        for (let i = 0; i < 26; i++) {
            if (histo[i] == 0) {
                continue;
            }
            
            // Greedily building the k^th string
            histo[i] -= 1;
            let ways = checkCount(histo);
            if (ways >= k) {
                left += String.fromCharCode(i + 97);
                break;
            }
            k -= ways;
            histo[i] += 1;
        }
    }

    return left + mid + [...left].reverse().join("");
};

var checkCount = function(current) {
    let count = current.reduce((a, x) => a + x, 0);
    let res = 1;
    for (let i = 0; i < 26; i++) {
        if (current[i] != 0) {
            let ways = 1;
            for (let j = 1; j <= current[i]; j++) {
                ways = Math.floor(ways * (count - current[i] + j) / j);
            }
            res *= ways;
            count -= current[i];
        }
    }
    return res;
}