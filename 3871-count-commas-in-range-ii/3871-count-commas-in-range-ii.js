/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let start = 1000;

    let commas = 1;

    let answer = 0;

    while (start <= n) {
        let end;

        if (start > n / 1000) {
            end = n;
        } else {
            end = start * 1000 - 1;
        }

        const count = end - start + 1;

        answer += count * commas;

        start *= 1000;

        commas++;
    }

    return answer;
};