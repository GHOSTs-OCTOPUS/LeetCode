class Solution {
public:
    int largestCombination(vector<int>& candidates) {
        // Initialize a vector to store the count of each bit position.
        vector<int> bitCount(24, 0);
        for (int i = 0; i < 24; i++) {
            for (int num : candidates) {
                // Check if the i-th bit is set.
                if ((num & (1 << i)) != 0) {
                    bitCount[i]++;
                }
            }
        }
        // Return the maximum count.
        return *max_element(bitCount.begin(), bitCount.end());
    }
};