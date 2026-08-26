/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let smallStr = "";
    let oneCnt = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === '1') {
            oneCnt++;
        }

        while (oneCnt === k) {
            smallStr = lexico(
                smallStr,
                s.substring(left, right + 1)
            );

            if (s[left] === '1') {
                oneCnt--;
            }

            left++;
        }
    }

    return smallStr;
};

function lexico(str1, str2) {
    if (str1 === "") return str2;

    if (str1.length > str2.length) return str2;

    if (str2.length > str1.length) return str1;

    return str1 <= str2 ? str1 : str2;
}