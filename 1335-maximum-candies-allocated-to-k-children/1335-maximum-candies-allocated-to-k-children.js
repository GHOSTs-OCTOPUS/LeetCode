var maximumCandies = function(candies, k) {
    let left = 1, right = Math.max(...candies);
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let childrenCount = candies.reduce((sum, pile) => sum + Math.floor(pile / mid), 0);

        if (childrenCount >= k) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};