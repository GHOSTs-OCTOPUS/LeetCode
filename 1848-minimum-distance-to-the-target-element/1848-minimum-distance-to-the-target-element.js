/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let answer = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            answer = Math.min(answer, Math.abs(i - start));
        }
    }

    return answer;
};