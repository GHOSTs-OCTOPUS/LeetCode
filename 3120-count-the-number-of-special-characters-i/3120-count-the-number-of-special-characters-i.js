/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    
    const set = new Set(word);

    let count = 0;

    for(let i = 0; i < 26; i++) {

        let lower = String.fromCharCode(97 + i);

        let upper = String.fromCharCode(65 + i);

        if(set.has(lower) && set.has(upper)) {
            count++;
        }
    }

    return count;
};