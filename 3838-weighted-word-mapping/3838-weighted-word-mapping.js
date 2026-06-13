/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";
    
    for (const word of words) {
        let sumWeight = 0;
        
        for (const ch of word) {
            sumWeight += weights[ch.charCodeAt(0) - 97];
        }
        
        const value = sumWeight % 26;
        
        result += String.fromCharCode('z'.charCodeAt(0) - value);
    }
    
    return result;
};