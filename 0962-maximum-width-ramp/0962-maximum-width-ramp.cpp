class Solution {
public:
    static int maxWidthRamp(vector<int>& nums) {
        const int n=nums.size();
        vector<unsigned> numsIdx(n);
        for(int i=0; i<n; i++)
            numsIdx[i]=((unsigned)nums[i]<<16)+i;

        sort(numsIdx.begin(), numsIdx.end());
        int min_i=n, width=0;
        for(auto x: numsIdx){
            int i=x&((1<<16)-1);
            width=max(width, i-min_i);
            min_i=min(min_i, i);
        }
        return width;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();