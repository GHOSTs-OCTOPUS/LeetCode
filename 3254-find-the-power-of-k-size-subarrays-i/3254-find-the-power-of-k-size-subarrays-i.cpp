class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        int length = nums.size();
        vector<int> result(length - k + 1);

        for (int start = 0; start <= length - k; start++) {
            bool isConsecutiveAndSorted = true;

            // Check if the current subarray is sorted and consecutive
            for (int index = start; index < start + k - 1; index++) {
                if (nums[index + 1] != nums[index] + 1) {
                    isConsecutiveAndSorted = false;
                    break;
                }
            }

            // If valid, take the maximum of the subarray, otherwise set to -1
            if (isConsecutiveAndSorted) {
                // Maximum element of this subarray
                result[start] = nums[start + k - 1];
            } else {
                result[start] = -1;
            }
        }

        return result;
    }
};