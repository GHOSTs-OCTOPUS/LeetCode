/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    const n = nums.length;

    // Store [value, originalIndex].
    const pairs = [];

    for (let i = 0; i < n; i++) {
        pairs.push([nums[i], i]);
    }

    // Sort by value.
    pairs.sort((a, b) => a[0] - b[0]);

    const result = new Array(n);

    let start = 0;

    while (start < n) {
        let end = start;

        // Find one connected group.
        while (
            end + 1 < n &&
            pairs[end + 1][0] - pairs[end][0] <= limit
        ) {
            end++;
        }

        // Extract original indices.
        const indices = [];

        for (let i = start; i <= end; i++) {
            indices.push(pairs[i][1]);
        }

        // Assign smallest values to smallest indices.
        indices.sort((a, b) => a - b);

        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = pairs[start + i][0];
        }

        start = end + 1;
    }

    return result;
};