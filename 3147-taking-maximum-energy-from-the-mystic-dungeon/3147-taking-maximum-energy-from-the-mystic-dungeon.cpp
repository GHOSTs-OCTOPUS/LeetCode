class Solution {
public:
    int maximumEnergy(vector<int>& energy, int k) {
        int ans = INT_MIN;
        for(int i = 0; i < k; ++i){
            for(int j = energy.size()-1 - i, sum = 0; j >= 0; j -= k){
                sum += energy[j];
                ans = max(ans, sum);
            }
        }
        return ans;
    }
};
  