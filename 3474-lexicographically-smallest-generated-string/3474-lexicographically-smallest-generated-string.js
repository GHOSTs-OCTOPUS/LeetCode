/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    let word = new Array(n + m - 1).fill('?');
    let locked = new Array(n + m - 1).fill(false);

    for (let i = 0; i < n; i++) {
        if (str1[i] === 'T') {
            for (let j = 0; j < m; j++) {
                if (word[i+j] === '?' || word[i+j] === str2[j]) {
                    word[i+j] = str2[j];
                    locked[i+j] = true;
                } else return "";
            }
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === '?') word[i] = 'a';
    }

    for (let i = 0; i < n; i++) {
        if (str1[i] === 'F') {
            let match = true;

            for (let j = 0; j < m; j++) {
                if (word[i+j] !== str2[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                let done = false;

                for (let j = m-1; j >= 0; j--) {
                    if (!locked[i+j]) {
                        for (let c = 0; c < 26; c++) {
                            let ch = String.fromCharCode(97 + c);
                            if (ch !== str2[j]) {
                                word[i+j] = ch;
                                done = true;
                                break;
                            }
                        }
                    }
                    if (done) break;
                }

                if (!done) return "";
            }
        }
    }

    return word.join('');
};