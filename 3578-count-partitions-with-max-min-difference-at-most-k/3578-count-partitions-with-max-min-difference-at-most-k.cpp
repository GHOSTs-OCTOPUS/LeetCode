class Solution {
public:
    int countPartitions(vector<int>& nums, int k) {
        const int MOD = 1e9 + 7;
        int n = nums.size();

        vector<long long> dp(n + 1) , prefix(n + 2);
        dp[0] = 1;
        prefix[1] = 1;

        deque<int> minQ , maxQ;
        int l = 0;


        for (int i = 0; i < n; ++i) {
            while(!maxQ.empty() && nums[maxQ.back()] <= nums[i]) {
                maxQ.pop_back();
            }
            while(!minQ.empty() && nums[minQ.back()] >= nums[i]) {
                minQ.pop_back();
            }

            maxQ.push_back(i);
            minQ.push_back(i);

            while(nums[maxQ.front()] - nums[minQ.front()] > k) {
                if (maxQ.front() == l) {
                    maxQ.pop_front();
                }
                if (minQ.front() == l) {
                    minQ.pop_front();
                }
                ++l;
            }

            dp[i + 1] = (prefix[i + 1] - prefix[l] + MOD) % MOD;
            prefix[i + 2] = (prefix[i + 1] + dp[i + 1]) % MOD;
        }
        return dp[n];
    }
};