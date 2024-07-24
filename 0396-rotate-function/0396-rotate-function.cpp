class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        int n=nums.size();
        int product=0;
        int sum = 0;
        for(int i=0;i<n;i++){
            product += nums[i]*i;
            sum += nums[i];
        }

        int maxi = product;

        for(int i=1;i<n;i++){
            int temp = product + sum - nums[n-i] * n;
            product = temp;
            maxi = max(maxi,product);
        }
        return maxi;
    }
};