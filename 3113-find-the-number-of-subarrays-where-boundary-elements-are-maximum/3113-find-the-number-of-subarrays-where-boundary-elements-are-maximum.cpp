class Solution {
public:
    long long numberOfSubarrays(vector<int>& nums){
        int n = nums.size();
        vector<int> nge(n,n);
        stack<int> stack;
        for(int i=n-1;i>=0;i--){
            while(stack.empty() == false && nums[i] >= nums[stack.top()]) stack.pop();
            if(stack.empty() == false) nge[i] = stack.top();
            stack.push(i);
        }
        long long ans = 0;
        map<int,vector<int>> g;
        for(int i=0;i<n;i++) g[nums[i]].push_back(i);
        for(int i=0;i<n;i++){
            int L = i , R = nge[i]-1;
            int x = lower_bound(g[nums[i]].begin(),g[nums[i]].end(),L)-g[nums[i]].begin();
            int y = upper_bound(g[nums[i]].begin(),g[nums[i]].end(),R)-g[nums[i]].begin();
            ans += y-x;
        }
        return ans;
    }
};