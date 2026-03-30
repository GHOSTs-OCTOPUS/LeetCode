/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let evenfreq1 = new Array(26).fill(0);
    let oddfreq1 = new Array(26).fill(0);
    let evenfreq2 = new Array(26).fill(0);
    let oddfreq2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        let code1 = s1.charCodeAt(i) - 97;
        let code2 = s2.charCodeAt(i) - 97;
        if (i % 2 === 0) {
            evenfreq1[code1]++;
            evenfreq2[code2]++;
        } else {
            oddfreq1[code1]++;
            oddfreq2[code2]++;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        if (evenfreq1[i] !== evenfreq2[i] || 
            oddfreq1[i] !== oddfreq2[i]) {
            return false;
        }
    }
    
    return true;
};