class Solution {
public:
    bool reportSpam(vector<string>& m, vector<string>& bw) {
          
          unordered_set<string> st(bw.begin(), bw.end());

          int cnt = 0;

          for(auto it : m) {
            if(st.find(it) != st.end()) cnt++;
          } 
        
          return (cnt >= 2);
    } 
};