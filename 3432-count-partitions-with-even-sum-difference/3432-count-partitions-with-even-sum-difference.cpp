class Solution {
public:
    int countPartitions(vector<int>& nums) {
        
        int n = nums.size();

        int sumr = accumulate(nums.begin(), nums.end(), 0);
        int suml = 0;

        int ans = 0;

        for(int i=0;i<n-1;i++)
        {
            sumr = sumr + nums[i];
            suml = suml - nums[i];

            if(abs(sumr - suml) % 2 == 0) ans++;
        }

        return ans;

    }
};