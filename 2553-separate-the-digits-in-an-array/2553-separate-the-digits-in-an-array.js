/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
    let result = [];

    for (let num of nums) {

        let str = num.toString();

        for (let ch of str) {

            result.push(Number(ch));
        }
    }

    // Return final array
    return result;
};