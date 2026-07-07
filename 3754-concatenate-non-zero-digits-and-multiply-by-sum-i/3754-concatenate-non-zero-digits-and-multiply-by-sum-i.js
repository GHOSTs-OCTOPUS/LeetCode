/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {

    let s = n.toString();

    let newNumber = 0;
    let digitSum = 0;

    for(let ch of s){

        if(ch !== '0'){

            let digit = Number(ch);

            newNumber = newNumber * 10 + digit;

            digitSum += digit;
        }
    }

    return newNumber * digitSum;
};