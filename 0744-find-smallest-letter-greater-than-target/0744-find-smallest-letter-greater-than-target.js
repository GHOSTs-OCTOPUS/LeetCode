/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let res = letters[0];
    let flag = false;

    for (let ch of letters) {
        if (!flag) {
            if (ch > target) {
                res = ch;
                flag = !flag;
            }
        } else {
            if (ch > target && ch < res) res = ch;
        }
    }

    return res;
};