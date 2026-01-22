/**
 * @param {number[]} nums
 * @return {number}
 */
var isSorted = function(nums, n) {
    for(let i = 1; i < n; i++) {
        if(nums[i] < nums[i - 1]) return false;
    }
    return true;
}
var minimumPairRemoval = function(nums) {
    let ans = 0, n = nums.length;
    while(!isSorted(nums, n)) {
        ans += 1;
        let min_sum = Infinity, pos = -1;
        for(let i = 1; i < n; i++) {
            let sum = nums[i - 1] + nums[i];
            if(sum < min_sum) {
                min_sum = sum;
                pos = i;
            }
        }
        nums[pos - 1] = min_sum;
        for(let i = pos; i < n - 1; i++) nums[i] = nums[i + 1];
        n--;
    }
    return ans;
};