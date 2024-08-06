class Solution {
public:
    bool isTransformable(string s, string t) {
        int n = s.length();
        vector<int> pos(10, n);
        for(int i=0; i<n; i++){
            if(pos[s[i]-'0'] == n) pos[s[i]-'0'] = i;
        }
        for(int i=0; i<n; i++){
            int num = t[i]-'0';
            if(pos[num] == n) return 0;
            for(int j=0; j<num; j++){
                if(pos[j] < pos[num]) return 0;
            }
            pos[num]++;
            while(pos[num]<n && s[pos[num]]-'0' != num) pos[num]++;
        }
        return 1;
    }
};