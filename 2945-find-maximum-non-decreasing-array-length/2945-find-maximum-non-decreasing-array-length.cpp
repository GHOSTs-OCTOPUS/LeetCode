class Solution {
public:    
    int findMaximumLength(vector<int>& nums) {
        int n = nums.size();
        
        // Create a prefix sum array to store cumulative sums of elements
        vector<long long> pref(n + 1); // Using 1-based indexing
        pref[0] = 0;
        for(int i = 0; i < n; i++)
            pref[i + 1] = pref[i] + nums[i]; // Calculate prefix sum
        
        // memoization to store information about subarray lengths and their sums
        // dp[i].first: length of the longest subarray up to index i
        // dp[i].second: sum of the elements in the longest subarray up to index i
        vector<pair<int, long long>> dp(n + 2); // Using 1-based indexing
        
        // Initializing dpization for the base case
        dp[0].first = 1; // Length of an empty array is 1
        for(int i = 1; i <= n; i++) {
            // Update the dpization array
            dp[i] = max(dp[i], dp[i - 1]); // Update the length of subarray at index i
            
            // Finding the index where the subarray with equal parts sums ends
            int idx = lower_bound(pref.begin(), pref.end(), 2 * pref[i] - dp[i].second) - pref.begin();
            
            // Update the dpization if a longer subarray with equal parts sums is found
            dp[idx] = max(dp[idx], {dp[i].first + 1, pref[i]}); // Update length and sum information
        }
        return dp[n].first; // Return the length of the longest subarray with equal parts sums
    }
};