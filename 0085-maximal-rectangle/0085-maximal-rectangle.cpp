class Solution {
    
    vector<int>next_small(vector<int>&arr){
        int n=arr.size();
        stack<int>st;
        
        st.push(-1);
        
        vector<int>ans(n);
        
        for(int i=n-1;i>=0;i--){
            int curr=arr[i];
            
            while(st.top()!=-1 && arr[st.top()]>=curr){
                st.pop();
            }
            
            
            // smaller element found
            
            ans[i]=st.top();
            
            st.push(i);
        }
        
        return ans;
    }
    
    vector<int>prev_small(vector<int>&arr ){
        int n=arr.size();
        stack<int>st;
        
        st.push(-1);
        
        vector<int>ans(n);
        
        for(int i=0;i<n;i++){
            int curr=arr[i];
            
            while(st.top()!=-1 && arr[st.top()]>=curr){
                st.pop();
            }
            
            
            // smaller element found
            
            ans[i]=st.top();
            
            st.push(i);
        }
        
        return ans;
    }
    
    int largest_area(vector<int>&heights){
        int n=heights.size();
        
        vector<int>next(n);
        next=next_small(heights);
        
        vector<int>prev(n);
        prev=prev_small(heights);
        int maxi=0;
        
        for(int i=0;i<n;i++){
            int length=heights[i];
            
            if(next[i]==-1){
                next[i]=n;
            }
            int breadth=next[i]-prev[i]-1;
            
            
            int area=length*breadth;
            maxi=max(maxi,area);
            
        }
        
        return maxi;
    }
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        
        int maxi=0;
        
        vector<int>height(matrix[0].size(),0);
        
        for(int i=0;i<matrix.size();i++){
            for(int j=0;j<height.size();j++){
                if(matrix[i][j]=='1'){
                    height[j]++;
                }
                else{
                    height[j]=0;
                }
               
            }
             maxi=max(maxi,largest_area(height));
        }
        
        return maxi;
    }
};
