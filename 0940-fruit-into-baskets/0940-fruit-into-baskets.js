/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let last = -1, secondLast = -1;
    let lastCount = 0, curr = 0, maxFruits = 0;

    for (let fruit of fruits) {
        if (fruit === last || fruit === secondLast) {
            curr++;
        } else {
            curr = lastCount + 1;
        }

        if (fruit === last) {
            lastCount++;
        } else {
            lastCount = 1;
            secondLast = last;
            last = fruit;
        }

        maxFruits = Math.max(maxFruits, curr);
    }

    return maxFruits;
};