class Solution {
public:
    int findTheLongestSubstring(string s) {
        int x= 0;
        unordered_map<int,int>mp;
        mp[0]=-1;
        int n=0;
        for(int i=0;i<s.length();i++){
            if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
                x^= (s[i]-'a'+1);
               if(mp.find(x)==mp.end())
                  mp[x]=i;
            }
            if(mp.find(x)!=mp.end())
                n= max(n,i-mp[x]);
        }
        return n;
    }
};