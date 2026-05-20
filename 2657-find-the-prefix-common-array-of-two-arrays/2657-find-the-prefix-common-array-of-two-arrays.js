/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {

    const n = A.length;

    const seen = new Array(n + 1).fill(0);

    let common = 0;

    const ans = [];

    for (let i = 0; i < n; i++) {

        seen[A[i]]++;

        if (seen[A[i]] === 2)
            common++;

        seen[B[i]]++;

        if (seen[B[i]] === 2)
            common++;

        ans.push(common);
    }

    return ans;
};