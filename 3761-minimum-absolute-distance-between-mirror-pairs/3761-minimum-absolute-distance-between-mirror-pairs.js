/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const reverseNum = (x) => {
        let rev = 0;

        while (x > 0) {
            rev = rev * 10 + (x % 10);
            x = Math.floor(x / 10);
        }

        return rev;
    };

    const lastIndex = new Map();
    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (lastIndex.has(nums[i])) {
            ans = Math.min(ans, i - lastIndex.get(nums[i]));
        }

        const rev = reverseNum(nums[i]);
        lastIndex.set(rev, i);
    }

    return ans === Infinity ? -1 : ans;
};