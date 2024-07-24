class Solution {
public:
    string minimizeStringValue(string s) {
        vector<int> cnt(26, 0);
        for (auto x : s)
        {
            if (x != '?')
                cnt[x - 'a']++;
        }
        
        priority_queue<pair<int, char>, vector<pair<int, char>>, greater<pair<int, char>>> minHeap;
        for (int i = 0; i < 26; i++)
        {
            minHeap.push({cnt[i], 'a' + i});
        }
        
        string tmp = "";
        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] == '?')
            {
                auto curr = minHeap.top();
                minHeap.pop();
                
                tmp += curr.second;
                minHeap.push({curr.first + 1, curr.second});
            }
        }
        
        sort(tmp.begin(), tmp.end());
        int j = 0;
        
        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] == '?')
            {
                s[i] = tmp[j];
                j++;
            }
        }
        
        return s;
    }
};     