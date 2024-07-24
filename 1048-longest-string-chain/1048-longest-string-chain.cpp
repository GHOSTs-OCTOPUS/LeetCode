class Solution {
public:

    static bool compare(string &s1,string &s2){
        return s1.size() < s2.size();
    }  

    bool isPredecessor(string s1, string s2){

        if(s1.length() + 1 == s2.length()){

            int count = 0;
            int k = 0;
            char c = s1[0];
            for(int i = 0; i<s2.length(); i++){

                if(s2[i] == c){
                    c = s1[++k];
                }else{
                    count++;
                    if(count>1){
                        return false;
                    }
                }

            }
            return true;

        }

        return false;

    } 

    int longestStrChain(vector<string>& words) {
     
        sort(words.begin(), words.end(), compare);

        int start = 0;
        int end = 1;
        int maxCount = 1;

        map<int, int> m;

        for(int i = 0;i<words.size(); i++){
            int count = m[i];
            start = i;
            for(int end = i+1; end<words.size(); end++){

                if(isPredecessor(words[start], words[end])){
                    m[end] = max(count + 1, m[end]);
                }

            }

            maxCount = max(maxCount, count + 1);

        }

        return maxCount;
        
    }
};