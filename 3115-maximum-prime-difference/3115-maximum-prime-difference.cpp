class Solution {
public:
    bool isPrime(int num) 
    {
        if (num <= 1)
            return false;
        
        for (int i = 2; i <= sqrt(num); i++) 
        {
            if (num % i == 0)
                return false;
        }
        
        return true;
    }
    
    int maximumPrimeDifference(vector<int>& nums) 
    {
        vector<int> pi;
        for (int i = 0; i < nums.size(); ++i) 
        {
            if (isPrime(nums[i]))
                pi.push_back(i);
        }
        
        int maxDiff = 0;
        if (pi.size() > 1)
            maxDiff = max(maxDiff, pi[pi.size() - 1] - pi[0]);
        
        return maxDiff;
    }
};