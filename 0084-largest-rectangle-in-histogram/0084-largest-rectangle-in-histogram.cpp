class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        vector<int>nxt;
        vector<int>prev;
        stack<int>s;
        int n = heights.size();
        s.push(n);
        for(int i=n-1;i>=0;i--){
            while(s.top()!=n && heights[s.top()]>=heights[i]) s.pop();
            nxt.push_back(s.top());
            s.push(i);
        }
        while(!s.empty()) s.pop();
        s.push(-1);
        for(int i=0;i<n;i++){
            while(s.top()!=-1 && heights[s.top()]>=heights[i]) s.pop();
            prev.push_back(s.top());
            s.push(i);
        }
        int m=0;
        for(int i=0;i<n;i++)m = max(m,heights[i] * (nxt[n-1-i]-prev[i]-1));
        return m;
    }
};