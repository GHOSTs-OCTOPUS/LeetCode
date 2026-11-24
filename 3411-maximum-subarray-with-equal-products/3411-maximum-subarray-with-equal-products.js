/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (a, b) => {
        while (b !== 0n) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const lcm = (a, b) => (a / gcd(a, b)) * b;

    const n = nums.length;
    let maxLen = 0;
    const limit = 1000000000000n;
    const cap = 2000000000000n;

    for (let i = 0; i < n; i++) {
        let currentProd = 1n;
        let currentGcd = BigInt(nums[i]);
        let currentLcm = BigInt(nums[i]);

        for (let j = i; j < n; j++) {
            const val = BigInt(nums[j]);
            if (currentProd > limit / val) {
                currentProd = cap;
            } else {
                currentProd *= val;
            }

            if (j > i) {
                currentGcd = gcd(currentGcd, val);
                currentLcm = lcm(currentLcm, val);
            }

            if (currentProd === currentLcm * currentGcd) {
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                }
            }
        }
    }

    return maxLen;
};