class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        priority_queue<pair<int, int>, vector<pair<int, int>>,
                       greater<pair<int, int>>>
            pq;
        for (int i = 0; i < n; i++) pq.push({nums[i], i});

        int ans = 0, mod = 1e9 + 7;
        for (int i = 1; i <= right; i++) {
            auto p = pq.top();
            pq.pop();
            // If the current index is greater than or equal to left, add the
            // value to the answer.
            if (i >= left) ans = (ans + p.first) % mod;
            // If index is less than the last index, increment it and add its
            // value to the first pair value.
            if (p.second < n - 1) {
                p.first += nums[++p.second];
                pq.push(p);
            }
        }
        return ans;
    }
};