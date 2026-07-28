/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {

    const freq = Array(26).fill(0);

    for (const c of s)
        freq[c.charCodeAt(0) - 97]++;

    let left = "";
    let mid = "";

    for (let i = 0; i < 26; i++) {

        left += String.fromCharCode(97 + i).repeat(Math.floor(freq[i] / 2));

        if (freq[i] & 1)
            mid = String.fromCharCode(97 + i);
    }

    return left + mid + [...left].reverse().join("");
};