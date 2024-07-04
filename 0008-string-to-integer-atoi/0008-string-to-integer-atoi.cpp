class Solution {
public:
    int myAtoi(string s) {
        int n=s.length();
        int i = 0;
        long ans = 0;
        int neg = 0;
   

        // trimming whitespce
        while (s[i] == ' ' && i < n) i++;

        while ((s[i] <= 47 || s[i] > 57 )&&i<n) {
            // '-' checkign negative number
            if (s[i] == '-') {
                neg = 1;
                i++;
                break;
            } else if (s[i] == '+') {
                i++;
                break;
            } 
            // encountering non digit first
            else if ((s[i] >= 65 && s[i] <= 90) || (s[i] >= 97 && s[i] <= 122) || s[i] == '.')
                return 0;
        }

        // leading zeroes
        while (s[i] == '0' && i < n) i++;
        
        while (i < n) {
            if (s[i] >= 48 && s[i] <= 57) {
                ans *= 10;
                ans += int(s[i] - '0');
                if (ans >2147483647) {
                    if(neg==1 && ans>=2147483648) return (-2147483648);
                    return 2147483647;
                }
            } 
            else break;
            i++;
        }

        if (neg) return (-ans);
        else return ans;
    }
};