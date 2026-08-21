/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    coins.sort((a, b) => a - b);

    const useful = [];

    for (const coin of coins) {
        let redundant = false;

        for (const prev of useful) {
            if (coin % prev === 0) {
                redundant = true;
                break;
            }
        }

        if (!redundant) {
            useful.push(coin);
        }
    }

    const m = useful.length;

    let low = 1;
    let high = useful[0] * k;

    const totalMasks = 1 << m;

    const lcms = new Array(totalMasks).fill(1);
    const signs = new Array(totalMasks).fill(1);

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (let mask = 1; mask < totalMasks; mask++) {
        let currentLCM = 1;
        let bits = 0;

        for (let i = 0; i < m; i++) {
            if ((mask & (1 << i)) !== 0) {
                const g = gcd(currentLCM, useful[i]);

                currentLCM /= g;

                if (currentLCM > Math.floor(high / useful[i])) {
                    currentLCM = high + 1;
                    break;
                }

                currentLCM *= useful[i];
                bits++;
            }
        }

        lcms[mask] = currentLCM;

        signs[mask] = bits % 2 === 1 ? 1 : -1;
    }

    const count = (x) => {
        let result = 0;

        for (let mask = 1; mask < totalMasks; mask++) {
            if (lcms[mask] <= x) {
                result += signs[mask] * Math.floor(x / lcms[mask]);
            }
        }

        return result;
    };

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (count(mid) >= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};