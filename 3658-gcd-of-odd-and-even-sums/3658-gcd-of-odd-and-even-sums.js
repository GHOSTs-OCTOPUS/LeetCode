/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    if (n === 1)
        return 1;

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 1; i < n * 2; i++) {
        if (i % 2 === 0)
            sumEven += i;
        else
            sumOdd += i;
    }

    let num = Math.min(sumEven, sumOdd);
    let num2 = Math.max(sumEven, sumOdd);

    while (num > 0) {
        const temp = num;

        if (num2 % num === 0)
            return num;

        num = num2 % num;
        num2 = temp;
    }

    return num;
};