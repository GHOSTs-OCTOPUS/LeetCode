class Solution {
public:
int n  ; 
vector<int> v; 
    Solution(vector<int>& nums) 
    {
         n = nums.size();
         v = nums;
    }
    
    int pick(int target) 
    {
        int idx = rand()%n; 
        if(v[idx]==target)
        return idx;
        else return pick(target);
        
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(nums);
 * int param_1 = obj->pick(target);
 */