class Solution {
public:
    vector<vector<int>> ans;
    int sum = 0;
    void dfs(vector<int>& cur, int k, int n, int idx)
    {
        if (cur.size() == k and sum == n)
        {
            ans.push_back(cur);
            return;
        }
        else if (cur.size() == k and sum > n) return;
        for (int i = idx; i <= 9; i++)
        {
            cur.push_back(i);
            sum += i;
            dfs(cur, k, n, i + 1);
            cur.pop_back();
            sum -= i;
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<int> cur;
        dfs(cur, k, n, 1);

        return ans;
    }
};