class Solution {
public:
    bool isPalindrome(int x) {
        std::string strX = std::to_string(x);
        return strX == std::string(strX.rbegin(), strX.rend());
    }
};