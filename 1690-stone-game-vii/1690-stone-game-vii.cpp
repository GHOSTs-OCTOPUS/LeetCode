class Solution {
public:
    
    // declare a prefix array
    
    vector<int> prefix_sum;
    
    // declare a dp
    
    vector<vector<int>> dp;
    
    int helper(vector<int>& stones, int start, int end)
    {
        // base case
        
        if(start >= end)
        {
            return 0;
        }
        
        // if already calculated
        
        if(dp[start][end] != -1)
        {
            return dp[start][end];
        }
        
        // remove from start
        
        int start_score = prefix_sum[end] - prefix_sum[start] - helper(stones, start + 1, end);
        
        // remove from end
        
        int end_score = 0;
        
        if(end - 1 >= 0)
        {
            end_score += prefix_sum[end - 1];
        }
        
        if(start - 1 >= 0)
        {
            end_score -= prefix_sum[start - 1];
        }
        
        end_score -= helper(stones, start, end - 1);
        
        // take the maximum from both start_score and end_score
        
        return dp[start][end] = max(start_score, end_score);
    }
    
    int stoneGameVII(vector<int>& stones) {
        
        int n = stones.size();
        
        // fill prefix_sum array
        
        prefix_sum.resize(n, 0);
        
        prefix_sum[0] = stones[0];
        
        for(int i = 1; i < n; i++)
        {
            prefix_sum[i] = prefix_sum[i - 1] + stones[i];
        }
        
        // resize dp
        
        dp.resize(n + 1);
        
        // initialize dp with -1
        
        dp.assign(n + 1, vector<int> (n + 1, -1));
        
        return helper(stones, 0, n - 1);
    }
};