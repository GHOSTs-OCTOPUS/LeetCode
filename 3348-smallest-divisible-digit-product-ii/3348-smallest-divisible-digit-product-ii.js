/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function (num, t) {
    let temp = t;
    for (let i = 2; i <= 9; i++) {
        while (temp % i === 0) {
            temp /= i;
        }
    }
    if (temp > 1) {
        return "-1";
    }

    const n = num.length;
    const rem = new Array(n + 1);
    rem[0] = t;
    let pos = n - 1;

    const numArr = num.split("");
    for (let i = 0; i < n; i++) {
        if (numArr[i] === "0") {
            pos = i;
            break;
        }
        rem[i + 1] = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
    }

    if (rem[n] === 1) {
        return num;
    }

    for (let i = pos; i >= 0; i--) {
        while (true) {
            numArr[i] = String.fromCharCode(numArr[i].charCodeAt(0) + 1);
            if (numArr[i] > "9") {
                break;
            }

            let tNow = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
            let k = 9;

            for (let j = n - 1; j > i; j--) {
                while (tNow % k !== 0) {
                    k--;
                }
                tNow = Math.floor(tNow / k);
                numArr[j] = String.fromCharCode("0".charCodeAt(0) + k);
            }

            if (tNow === 1) {
                return numArr.join("");
            }
        }
    }

    let ans = [];
    let originalT = t;
    for (let i = 9; i > 1; i--) {
        while (originalT % i === 0) {
            ans.push(String.fromCharCode("0".charCodeAt(0) + i));
            originalT = Math.floor(originalT / i);
        }
    }

    const padding = Math.max(n + 1 - ans.length, 0);
    for (let i = 0; i < padding; i++) {
        ans.push("1");
    }

    return ans.reverse().join("");
};

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}