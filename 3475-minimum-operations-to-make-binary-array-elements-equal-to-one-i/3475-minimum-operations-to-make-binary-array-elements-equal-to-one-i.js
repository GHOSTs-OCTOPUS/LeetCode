var minOperations = function(nums) {
    let n = nums.length, k = 0;

    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            k++;
        }
    }

    return nums.includes(0) ? -1 : k;
};