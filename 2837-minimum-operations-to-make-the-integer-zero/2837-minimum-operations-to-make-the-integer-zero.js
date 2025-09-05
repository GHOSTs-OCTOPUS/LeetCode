const makeTheIntegerZero = (num1, num2) => {
    const countOnes = n => n.toString(2).replace(/0/g, '').length;

    for (let k = 1; k <= 60; k++) {
        let d = num1 - num2 * k;
        if (d < k) {
            return -1;
        }
        if (k >= countOnes(d)) {
            return k;
        }
    }
    return -1;
};