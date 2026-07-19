/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {

    const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    const inStack = new Array(26).fill(false);

    const stack = [];

    for (const ch of s) {

        freq[ch.charCodeAt(0) - 97]--;

        if (inStack[ch.charCodeAt(0) - 97]) {
            continue;
        }

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > ch &&
            freq[stack[stack.length - 1].charCodeAt(0) - 97] > 0
        ) {
            inStack[stack.pop().charCodeAt(0) - 97] = false;
        }

        stack.push(ch);
        inStack[ch.charCodeAt(0) - 97] = true;
    }

    return stack.join("");
};