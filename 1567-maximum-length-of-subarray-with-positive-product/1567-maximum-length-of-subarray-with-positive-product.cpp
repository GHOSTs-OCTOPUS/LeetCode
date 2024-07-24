class Solution {
public:
    int getMaxLen(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> zeros_pos;
        int first = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                zeros_pos.push_back({first, i});
                first = i + 1;
            }
        }     
        zeros_pos.push_back({first, n});
        int ans_ = 0;
        for (auto i : zeros_pos) {
            vector<int> pos_neg;
            for (int j = i[0]; j < i[1]; j++) {
                if (nums[j] < 0) pos_neg.push_back(j);
               
            }
            if (pos_neg.size() % 2 == 0) {
                ans_ = max(ans_, i[1] - i[0]);
            } 
            else {
                ans_ = max(ans_, max(i[1] - pos_neg[0] - 1, pos_neg[pos_neg.size() - 1] - i[0]));
            }
        }
        return ans_;      
    }
};