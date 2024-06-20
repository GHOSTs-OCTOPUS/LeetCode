#include<ext/pb_ds/assoc_container.hpp>
#include<ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

template <typename T>
using ordered_set = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;

class Solution {
    bool isPeak(vector<int>& nums, int idx) {
        if(idx==0 || idx==nums.size()-1) return false;
        return nums[idx-1]<nums[idx] && nums[idx]>nums[idx+1];
    }
public:
    vector<int> countOfPeaks(vector<int>& nums, vector<vector<int>>& queries) {
        ordered_set<int> st;
        int n=nums.size();
        for(int i=0; i<n; i++) if(isPeak(nums, i)) st.insert(i);

        vector<int> ans;
        for(auto& q: queries) {
            if(q[0]==1) {
                int L = st.order_of_key(q[1]+1);
                int R = st.order_of_key(q[2]);
                int d = (L < R) ? R - L : 0;
                ans.push_back(d);
            }
            else {
                int idx=q[1], val=q[2];
                if(isPeak(nums, idx) || (idx>0 && isPeak(nums, idx-1)) || (idx<n-1 && isPeak(nums, idx+1))) {
                    nums[idx] = val;
                    if(!isPeak(nums, idx)) st.erase(idx);
                    if(idx>0 && !isPeak(nums, idx-1)) st.erase(idx-1);
                    if(idx<n-1 && !isPeak(nums, idx+1)) st.erase(idx+1);
                }
                nums[idx] = val;
                if(isPeak(nums, idx)) st.insert(idx);
                if(idx>0 && isPeak(nums, idx-1)) st.insert(idx-1);
                if(idx<n-1 && isPeak(nums, idx+1)) st.insert(idx+1);
            }
        }

        return ans;
    }
};