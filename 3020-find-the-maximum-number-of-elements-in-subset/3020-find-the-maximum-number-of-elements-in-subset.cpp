class Solution {
public:
    int maximumLength(vector<int>& nums) {
        int res = 1;
        unordered_map<long, int> ump;
        map<long, int> mp;
        for (auto& x: nums)
            mp[x]++, ump[x]++;
                
        for (auto& [x, freq]: mp) {
            int cnt = 1;
            if (!ump.count(x))
                continue;
            if (x == 1) {
                cnt = (freq % 2) ? freq : freq-1;
            } else {
                long i = x;
                while (ump.count(i) and ump[i] >= 2 and ump.count(i*i)) {
                    cnt += 2;
                    ump[i] -= 2;
                    if (ump[i] <= 0)
                        ump.erase(i);
                    i = i*i;
                }
            }
            res = max(res, cnt);
        }
        return res;
    }
};