/**
 * @param {number[]} nums
 * @return {number}
 */
// Added using AI
var minimumDistance = function(nums) {
    const n = nums.length ;
    if (n <= 2) return -1 ;
    let ans = Infinity;
    for (let i = 0; i < n; i++)
        for (let j = i+1; j < n; j++)
            if (nums[i] === nums[j])
                for (let k = j+1; k < n; k++)
                    if (nums[j] === nums[k])
                        ans = Math.min(ans, 2*(k-i)) ;
    return ans === Infinity ? -1 : ans;
};