class Solution {
public:
    int numberOfSubstrings(string s) 
    {
        int c[3] ={},ans=0,i=0,j=0;
        int n = s.length();
        for(;j<n;j++) 
        {
            c[s[j] - 'a']++;
            while (c[0] && c[1] && c[2])
            c[s[i++] - 'a']--;
            ans+=i;
        }
        return ans;
    }
};