class Solution {
public:
    // time/space: O(n^3)/O(1)
    long long maximumTripletValue(vector<int>& nums) {
        long long result = 0;
        const int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    long long value = (long long)(nums[i] - nums[j]) * nums[k];
                    result = max(result, value);
                }
            }
        }
        return result;
    }
};