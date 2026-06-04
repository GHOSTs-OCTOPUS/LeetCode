/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {

    function waviness(num) {
        const s = num.toString();
        let cnt = 0;

        for (let i = 1; i < s.length - 1; i++) {
            if ((s[i] > s[i - 1] && s[i] > s[i + 1]) ||
                (s[i] < s[i - 1] && s[i] < s[i + 1])) {
                cnt++;
            }
        }

        return cnt;
    }

    let ans = 0;

    for (let num = num1; num <= num2; num++) {
        ans += waviness(num);
    }

    return ans;
};