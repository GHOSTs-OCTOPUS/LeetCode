class Solution {
public:
    vector<string> result;

    void solve(string& str, int n, int open, int close) {
        if (str.length() == 2 * n) {
            result.push_back(str);
            return;
        }
        if (open < n) {
            str.push_back('(');
            solve(str, n, open + 1, close);
            str.pop_back();
        }
        if (close < open) {
            str.push_back(')');
            solve(str, n, open, close + 1);
            str.pop_back();
        }
    }

    vector<string> generateParenthesis(int n) {
        string str = "";
        int open = 0, close = 0;
        solve(str, n, open, close);
        return result;
    }
};