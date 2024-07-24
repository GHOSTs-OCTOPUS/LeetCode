class Solution {
public:
    int minimumSum(int num) {
        string s = to_string(num);

        vector<int> v;

        for(char ch : s)
        {
            int temp = ch - '0';
            v.push_back(temp);
        }

        sort(v.begin(),v.end());

        int ans = abs(v[0] * 10 + v[3] + v[1] * 10 + v[2]);
        return ans;
    }
};
