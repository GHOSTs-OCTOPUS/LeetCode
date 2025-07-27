const countHillValley = nums => {
    let count = 0;
    let left = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            if (nums[i] > nums[left] && nums[i] > nums[i + 1] || nums[i] < nums[left] && nums[i] < nums[i + 1]) {
                count++;
            }
            left = i;
        }
    }
    return count;
};