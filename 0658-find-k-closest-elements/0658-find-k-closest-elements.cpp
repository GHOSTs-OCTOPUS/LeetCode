class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        vector<pair<int,int>> m;
        vector<int>ans;
        int n=arr.size();
        for(int i=0;i<n;i++){
            m.push_back({abs(arr[i]-x),i});
        }
        sort(m.begin(),m.end(),[](const pair<int, int>& a,
            const pair<int, int>& b) {
             if(a.first==b.first){
                return a.second<b.second;
             }
             else return a.first<b.first;
    });
    
    for(auto i:m){
        if(k)ans.push_back(arr[i.second]),k--;
        else break;
    }
    sort(ans.begin(),ans.end());
    return ans;
    }
};