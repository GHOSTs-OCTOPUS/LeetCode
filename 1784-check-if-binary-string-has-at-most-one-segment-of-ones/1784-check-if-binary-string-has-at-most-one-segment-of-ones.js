/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    for(let i = 1; i < s.length; i++) {
        if(s[i] == '1' && s[i - 1] == '0') return false;
    }
    return true;
};