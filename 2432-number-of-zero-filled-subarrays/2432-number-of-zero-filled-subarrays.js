const zeroFilledSubarray = nums => {
    let ans = 0, numSub = 0;
    for (const num of nums) {
        if (num === 0) {
            numSub++;
        } else {
            numSub = 0;
        }
        ans += numSub;
    }
    return ans;
};