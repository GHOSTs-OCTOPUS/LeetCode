class Solution {
public:
    bool canChange(string start, string target) {
        int n = start.length();
        int l=0, r=0;
        for(int i=0; i<n; i++){
            if(start[i] == 'L'){
                l--;
            }
            else if(start[i] == 'R'){
                r++;
                if(l!=0) return false;
            }
            if(target[i] == 'L'){
                l++;
                if(r!=0) return false;
            }
            else if(target[i] == 'R'){
                r--;
            }

            if(l<0 || r<0) return false;
        }
        return l==0 && r==0;
    }
};
