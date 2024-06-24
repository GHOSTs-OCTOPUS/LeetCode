class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> requiredAlphabets(256, 0);
        vector<int> currentAlphabets(256, 0);

        int distinctCharCnt = 0;
        for(int i = 0; i < t.size(); i++){
            if(requiredAlphabets[t[i]] == 0)
                distinctCharCnt++;
            requiredAlphabets[t[i]]++;

        }
        
        string ans = "";
        int startingPoint = 0;
        int minLen = INT_MAX;
        int reqCnt = 0;
        int i = 0;
        for(int j = 0; j < s.size(); j++){
            currentAlphabets[s[j]]++;
            if(requiredAlphabets[s[j]] > 0 && currentAlphabets[s[j]] == requiredAlphabets[s[j]])
                reqCnt++;
            
            while(reqCnt >= distinctCharCnt){
                int tempLen = j - i + 1;
                if(tempLen < minLen){
                    minLen = tempLen;
                    startingPoint = i;
                }

                currentAlphabets[s[i]]--;
                if(requiredAlphabets[s[i]] > 0 && currentAlphabets[s[i]] < requiredAlphabets[s[i]])
                    reqCnt--;
                i++;
            }
        }
        if(minLen != INT_MAX) ans = s.substr(startingPoint, minLen);
        return ans;
    }
};