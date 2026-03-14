/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// Added using AI
var getHappyString = function(n, k) {
    let sz = 2 ** (n - 1);
    if (3 * sz < k) return "";

    const opts = ["bc", "ac", "ab"];
    let res = "";

    if      (k <= sz)     res = "a";
    else if (k <= 2 * sz) { res = "b"; k -= sz; }
    else                  { res = "c"; k -= 2 * sz; }

    for (let i = 1; i < n; i++) {
        sz = Math.floor(sz / 2);
        const ch = opts[res.charCodeAt(res.length - 1) - 97];
        if (k <= sz) res += ch[0];
        else       { res += ch[1]; k -= sz; }
    }
    return res;
};