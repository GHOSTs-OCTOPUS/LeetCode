/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;
    const freq = new Array(26).fill(0);

    // Count characters in s.
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // Match target from left to right.
    let matched = 0;

    while (matched < n) {
        const idx = target.charCodeAt(matched) - 97;

        if (freq[idx] === 0) {
            break;
        }

        freq[idx]--;
        matched++;
    }

    // Try to make the string greater at the latest possible position.
    for (let i = matched; i >= 0; i--) {

        // Restore the character if it belonged to the matched prefix.
        if (i < matched) {
            freq[target.charCodeAt(i) - 97]++;
        }

        if (i < n) {
            const current = target.charCodeAt(i) - 97;

            // Find the smallest character greater than target[i].
            for (let c = current + 1; c < 26; c++) {
                if (freq[c] > 0) {
                    let ans = target.slice(0, i);

                    // Place the first greater character.
                    ans += String.fromCharCode(97 + c);
                    freq[c]--;

                    // Append remaining characters in sorted order.
                    for (let x = 0; x < 26; x++) {
                        while (freq[x] > 0) {
                            ans += String.fromCharCode(97 + x);
                            freq[x]--;
                        }
                    }

                    return ans;
                }
            }
        }
    }

    return "";
};