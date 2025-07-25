const maxSum = nums => {
    if (nums.every(c => c < 0)) return Math.max(...nums);
    const unique = new Set(nums);

    return [...unique].filter(c => c > 0).reduce((a, c) => a + c, 0)
}