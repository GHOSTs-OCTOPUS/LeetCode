class Solution {
public:
    int minAbsoluteSumDiff(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        vector<int> diff(n);
        int M = 1e9 + 7;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            diff[i] = abs(nums1[i] - nums2[i]);
            sum = (sum + diff[i]) % M;
        }

        sort(nums1.begin(), nums1.end());
        vector<int> bestdiff(n);
        for (int i = 0; i < n; i++) {
            int j = lower_bound(nums1.begin(), nums1.end(), nums2[i]) -
                    nums1.begin();
            if (j != 0 && j != n) {
                bestdiff[i] =
                    min(abs(nums2[i] - nums1[j]), abs(nums2[i] - nums1[j - 1]));
            } else if (j == 0)
                bestdiff[i] = abs(nums2[i] - nums1[j]);
            else if (j == n)
                bestdiff[i] = abs(nums2[i] - nums1[j - 1]);
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans = max(ans, diff[i] - bestdiff[i]);
        }
        return (M + sum - ans) % M;
    }
};