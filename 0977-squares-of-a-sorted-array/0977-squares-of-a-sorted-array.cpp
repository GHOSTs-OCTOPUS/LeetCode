class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n = nums.size();

        for(int i=0;i<n;i++)
        {
            nums[i] = pow(nums[i],2);
        }
        sort(nums.begin(),nums.end());
        return nums;
    }
};