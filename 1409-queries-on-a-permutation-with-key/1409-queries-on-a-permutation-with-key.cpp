class Solution {
public:
    vector<int> processQueries(vector<int>& queries, int m) {
        deque<int> temp(m,0);
        vector<int> res(queries.size(),0);
        int j = 0;
        for(int i = 1; i <= m; i++)
        {
            temp[j] = i;
            j++;
        }
        j = 0;
        for(int i = 0; i < queries.size();  i++)
        {
            deque<int>::iterator itr;
            itr = find(temp.begin(),temp.end(),queries[i]);
            if(itr != temp.end()){
                res[j++] = itr - temp.begin();
                temp.erase(itr);
                temp.push_front(queries[i]);
            }
        }
        return res;
    }
};