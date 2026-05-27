/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const lastLower = {};
    const firstUpper = {};
    const invalid = new Set();

    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const letter = ch.toLowerCase();

        if (ch >= 'a' && ch <= 'z') {
            lastLower[letter] = i;

            if (letter in firstUpper) {
                invalid.add(letter);
            }

        } else {
            if (!(letter in firstUpper)) {
                firstUpper[letter] = i;
            }
        }
    }

    let specialCount = 0;

    for (const letter in lastLower) {
        if (letter in firstUpper && !invalid.has(letter)) {
            specialCount++;
        }
    }

    return specialCount;
};