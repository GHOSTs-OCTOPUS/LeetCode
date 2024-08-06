class Solution {
public:
    int ways(vector<string>& pizza, int k) {
        const int mod = 1000000007;
        const int n = pizza.size();
        const int m = pizza[0].length();
        vector<vector<vector<long long>>> dp(k,
            vector<vector<long long>>(n, vector<long long>(m)));
        vector<vector<vector<long long>>> dpv(k,
            vector<vector<long long>>(n, vector<long long>(m)));
        vector<vector<vector<long long>>> dph(k,
            vector<vector<long long>>(n, vector<long long>(m)));
        vector<vector<int>> freq(n + 1, vector<int>(m + 1));
        for (int i = n - 1; i >= 0; --i) {
            for (int j = m - 1; j >= 0; --j) {
                freq[i][j] = pizza[i][j] == 'A';
                if (i + 1 < n) {
                    freq[i][j] += freq[i + 1][j];
                    dpv[0][i][j] = dpv[0][i + 1][j];
                }
                if (j + 1 < m) {
                    freq[i][j] += freq[i][j + 1];
                    dph[0][i][j] = dph[0][i][j + 1];
                }
                if (i + 1 < n && j + 1 < m)
                    freq[i][j] -= freq[i + 1][j + 1];
                if (freq[i][j] > 0) {
                    dp[0][i][j] = 1;
                    dpv[0][i][j] += 1;
                    dph[0][i][j] += 1;
                }
            }
        }
        for (int d = 1; d < k; ++d) {
            vector<int> v(m, n);
            for (int i = n - 1; i >= 0; --i) {
                int h = m;
                for (int j = m - 1; j >= 0; --j) {
                    if (freq[i][j] > freq[v[j]][j])
                        v[j] = i;
                    if (freq[i][j] > freq[i][h])
                        h = j;
                    if (v[j] + 1 < n)
                        dp[d][i][j] = dpv[d - 1][v[j] + 1][j];
                    if (h + 1 < m)
                        dp[d][i][j] = (dp[d][i][j] + dph[d - 1][i][h + 1]) % mod;
                    dpv[d][i][j] = dph[d][i][j] = dp[d][i][j];
                    if (i + 1 < n)
                        dpv[d][i][j] = (dpv[d][i][j] + dpv[d][i + 1][j]) % mod;
                    if (j + 1 < m)
                        dph[d][i][j] = (dph[d][i][j] + dph[d][i][j + 1]) % mod;
                }
            }
        }
        return dp[k - 1][0][0];
    }
};