/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let res = 0;

    for (let n of nums) {
        let val = sumOne(n);
        if (val !== -1) res += val;
    }
    return res;
};

function sumOne(n) {
    let p = Math.round(Math.cbrt(n));
    if (p * p * p === n && isPrime(p)) {
        return 1 + p + p*p + p*p*p;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            let a = i, b = n / i;
            if (a !== b && isPrime(a) && isPrime(b)) {
                return 1 + a + b + n;
            }
            return -1;
        }
    }
    return -1;
}

function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}